let units = 'imperial', gender = 'female', energyUnit = 'kcal';
const elements = {
    ageSlide: document.getElementById('slide-age'), ageNum: document.getElementById('num-age'),
    weightSlide: document.getElementById('slide-weight'), weightNum: document.getElementById('num-weight'),
    heightSlide: document.getElementById('slide-height'), heightNum: document.getElementById('num-height'),
    targetSlide: document.getElementById('slide-target-weight'), targetNum: document.getElementById('num-target-weight'),
    activity: document.getElementById('select-activity'), macro: document.getElementById('select-macro'),
    deadline: document.getElementById('input-date'), warning: document.getElementById('danger-warning'),
    lblCal: document.getElementById('label-calories'), lblFatG: document.getElementById('label-fat-g'),
    lblFatPct: document.getElementById('label-fat-pct'), lblCarbG: document.getElementById('label-carb-g'),
    lblCarbPct: document.getElementById('label-carb-pct'), lblProG: document.getElementById('label-protein-g'),
    lblProPct: document.getElementById('label-protein-pct'), lblTdee: document.getElementById('label-tdee'),
    lblPace: document.getElementById('label-pace'), lblFiberG: document.getElementById('label-fiber-g'),
    lblSugarG: document.getElementById('label-sugar-g'), lblAddedSugarG: document.getElementById('label-added-sugar-g'),
    lblSatFatG: document.getElementById('label-satfat-g'), lblCholMg: document.getElementById('label-chol-mg'),
    lblSodiumMg: document.getElementById('label-sodium-mg')
};

function syncInputs(slider, number, updateFn) {
    if (!slider || !number) return;
    slider.addEventListener('input', (e) => { number.value = e.target.value; updateFn(); });
    number.addEventListener('input', (e) => { slider.value = e.target.value; updateFn(); });
}

function convertValuesToImperial() {
    elements.weightNum.value = Math.round(parseFloat(elements.weightNum.value) / 0.453592);
    elements.targetNum.value = Math.round(parseFloat(elements.targetNum.value) / 0.453592);
    elements.heightNum.value = Math.round(parseFloat(elements.heightNum.value) / 2.54);
}

function convertValuesToMetric() {
    elements.weightNum.value = (Math.round(parseFloat(elements.weightNum.value) * 0.453592 * 10) / 10).toFixed(1);
    elements.targetNum.value = (Math.round(parseFloat(elements.targetNum.value) * 0.453592 * 10) / 10).toFixed(1);
    elements.heightNum.value = (Math.round(parseFloat(elements.heightNum.value) * 2.54 * 10) / 10).toFixed(1);
}

function updateGenderLayout() {
    document.getElementById('btn-female').classList.toggle('active', gender === 'female');
    document.getElementById('btn-male').classList.toggle('active', gender === 'male');
    calculateTDEE();
}

function updateUnitLayout() {
    const isImp = units === 'imperial';
    document.getElementById('btn-imperial').classList.toggle('active', isImp);
    document.getElementById('btn-metric').classList.toggle('active', !isImp);
    document.getElementById('lbl-weight').innerText = isImp ? "Current Weight (lbs):" : "Current Weight (kg):";
    document.getElementById('lbl-height').innerText = isImp ? "Height (inches):" : "Height (cm):";
    document.getElementById('lbl-target-weight').innerText = isImp ? "Target Weight (lbs):" : "Target Weight (kg):";
    if(isImp) {
        updateSliders(elements.weightSlide, elements.weightNum, 0, 600, elements.weightNum.value, 1);
        updateSliders(elements.heightSlide, elements.heightNum, 0, 100, elements.heightNum.value, 1);
        updateSliders(elements.targetSlide, elements.targetNum, 0, 600, elements.targetNum.value, 1);
    } else {
        updateSliders(elements.weightSlide, elements.weightNum, 0, 272, elements.weightNum.value, 0.1);
        updateSliders(elements.heightSlide, elements.heightNum, 0, 254, elements.heightNum.value, 0.1);
        updateSliders(elements.targetSlide, elements.targetNum, 0, 272, elements.targetNum.value, 0.1);
    }
    calculateTDEE();
}

function updateSliders(slide, num, min, max, val, step) {
    if (!slide || !num) return;
    slide.min = min; slide.max = max; slide.step = step; slide.value = val;
    num.min = min; num.max = max; num.step = step; num.value = val;
}

function updateEnergyLayout() {
    const isKcal = energyUnit === 'kcal';
    document.getElementById('btn-kcal').classList.toggle('active', isKcal);
    document.getElementById('btn-kj').classList.toggle('active', !isKcal);
    document.getElementById('label-energy-title').innerText = isKcal ? "Calories" : "Kilojoules";
    document.getElementById('label-tdee-title').innerText = isKcal ? "Baseline Maintenance TDEE:" : "Baseline Maintenance TDEE (kJ):";
    calculateTDEE();
}

function calculateTDEE() {
    let weight = parseFloat(elements.weightNum.value), height = parseFloat(elements.heightNum.value);
    const age = parseFloat(elements.ageNum.value), activityMultiplier = parseFloat(elements.activity.value), targetWeight = parseFloat(elements.targetNum.value);
    if (isNaN(weight) || isNaN(height) || isNaN(age)) return;
    let weightKg = units === 'imperial' ? weight * 0.453592 : weight, heightCm = units === 'imperial' ? height * 2.54 : height, targetWeightKg = units === 'imperial' ? targetWeight * 0.453592 : targetWeight;
    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    const tdeeKcal = Math.round(bmr * activityMultiplier);
    
    const today = new Date(), targetDate = new Date(elements.deadline.value), diffTime = targetDate - today, diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let finalCaloriesKcal = tdeeKcal, paceText = "0";
    if (diffDays > 0 && weightKg !== targetWeightKg) {
        const totalWeightDiffKg = weightKg - targetWeightKg, totalCalorieDeficitNeeded = totalWeightDiffKg * 7700, dailyDeficit = totalCalorieDeficitNeeded / diffDays;
        finalCaloriesKcal = Math.round(tdeeKcal - dailyDeficit);
        const weeklyPaceKg = (totalWeightDiffKg / diffDays) * 7;
        paceText = units === 'imperial' ? `${(weeklyPaceKg / 0.453592).toFixed(1)} lbs / week` : `${weeklyPaceKg.toFixed(1)} kg / week`;
    } else { paceText = units === 'imperial' ? "0 lbs / week" : "0 kg / week"; }
    elements.lblPace.innerText = paceText;
    
    if (finalCaloriesKcal < (gender === 'female' ? 1200 : 1500)) { elements.warning.classList.remove('hidden'); } else { elements.warning.classList.add('hidden'); }
    
    const energyDisplay = energyUnit === 'kcal' ? finalCaloriesKcal : Math.round(finalCaloriesKcal * 4.184);
    const tdeeDisplay = energyUnit === 'kcal' ? tdeeKcal : Math.round(tdeeKcal * 4.184);
    const energySuffix = energyUnit === 'kcal' ? ' kcal' : ' kJ';

    elements.lblCal.innerText = energyDisplay.toLocaleString();
    elements.lblTdee.innerText = tdeeDisplay.toLocaleString() + energySuffix;

    let split = { carb: 0.4, pro: 0.3, minFat: 0.3 }; 
    if (elements.macro.value === 'lowcarb') split = { carb: 0.15, pro: 0.35, fat: 0.5 };
    if (elements.macro.value === 'highprotein') split = { carb: 0.25, pro: 0.45, fat: 0.3 };
    
    const fatG = Math.round((finalCaloriesKcal * split.fat) / 9), carbG = Math.round((finalCaloriesKcal * split.carb) / 4), proG = Math.round((finalCaloriesKcal * split.pro) / 4);
    const fiberG = Math.round((finalCaloriesKcal / 1000) * 14), sugarG = Math.round((finalCaloriesKcal * 0.10) / 4), addedSugarG = gender === 'female' ? 25 : 36;
    const satFatG = Math.round((finalCaloriesKcal * 0.10) / 9);

    elements.lblFatG.innerText = `${fatG}g`; elements.lblCarbG.innerText = `${carbG}g`; elements.lblProG.innerText = `${proG}g`; elements.lblFiberG.innerText = `${fiberG}g`;
    elements.lblSugarG.innerText = `${sugarG}g`; elements.lblAddedSugarG.innerText = `${addedSugarG}g`; elements.lblSatFatG.innerText = `${satFatG}g`;
    elements.lblCholMg.innerText = `300mg`; elements.lblSodiumMg.innerText = `2,300mg`;
    elements.lblFatPct.innerText = `${Math.round(split.fat * 100)}%`; elements.lblCarbPct.innerText = `${Math.round(split.carb * 100)}%`; elements.lblProPct.innerText = `${Math.round(split.pro * 100)}%`;
}

window.addEventListener('DOMContentLoaded', () => {
    const defaultDate = new Date(); 
    defaultDate.setDate(defaultDate.getDate() + 90); 
    elements.deadline.value = defaultDate.toISOString().substring(0, 10);

    syncInputs(elements.ageSlide, elements.ageNum, calculateTDEE); 
    syncInputs(elements.weightSlide, elements.weightNum, calculateTDEE);
    syncInputs(elements.heightSlide, elements.heightNum, calculateTDEE); 
    syncInputs(elements.targetSlide, elements.targetNum, calculateTDEE);
    
    elements.activity.addEventListener('change', calculateTDEE); 
    elements.macro.addEventListener('change', calculateTDEE); 
    elements.deadline.addEventListener('change', calculateTDEE);
    
    document.getElementById('btn-imperial').addEventListener('click', function(e) { e.preventDefault(); if (units === 'metric') { convertValuesToImperial(); units = 'imperial'; updateUnitLayout(); } });
    document.getElementById('btn-metric').addEventListener('click', function(e) { e.preventDefault(); if (units === 'imperial') { convertValuesToMetric(); units = 'metric'; updateUnitLayout(); } });
    document.getElementById('btn-female').addEventListener('click', function(e) { e.preventDefault(); gender = 'female'; updateGenderLayout(); });
    document.getElementById('btn-male').addEventListener('click', function(e) { e.preventDefault(); gender = 'male'; updateGenderLayout(); });
    
    document.getElementById('btn-kcal').addEventListener('click', function(e) { e.preventDefault(); energyUnit = 'kcal'; updateEnergyLayout(); });
    document.getElementById('btn-kj').addEventListener('click', function(e) { e.preventDefault(); energyUnit = 'kJ'; updateEnergyLayout(); });

    document.getElementById('btn-save').addEventListener('click', (e) => {e.preventDefault();localStorage.setItem('tdee_profile', JSON.stringify({ units, gender, energyUnit, age: elements.ageNum.value, weight: elements.weightNum.value, height: elements.heightNum.value, activity: elements.activity.value, targetWeight: elements.targetWeight.value, deadline: elements.deadline.value, macro: elements.macro.value }));
alert('💾 Profile preferences securely saved directly to your device!');
});
document.getElementById('btn-reset').addEventListener('click', (e) => { e.preventDefault(); if (confirm('🗑️ Are you sure you want to clear your saved profile data?')) { localStorage.removeItem('tdee_profile'); window.location.reload(); } });
const saved = localStorage.getItem('tdee_profile');
if (saved) {
const data = JSON.parse(saved); units = data.units; gender = data.gender; energyUnit = data.energyUnit || 'kcal';
document.getElementById('btn-female').classList.toggle('active', gender === 'female'); document.getElementById('btn-male').classList.toggle('active', gender === 'male');
updateUnitLayout();
elements.ageSlide.value = data.age; elements.ageNum.value = data.age;
elements.weightSlide.value = data.weight; elements.weightNum.value = data.weight;
elements.heightSlide.value = data.height; elements.heightNum.value = data.height;
elements.activity.value = data.activity; elements.targetSlide.value = data.targetWeight; elements.targetNum.value = data.targetWeight;
elements.deadline.value = data.deadline; elements.macro.value = data.macro;
updateEnergyLayout();
} else {
elements.ageSlide.value = 30; elements.ageNum.value = 30; elements.weightNum.value = 165; elements.heightNum.value = 66; elements.targetNum.value = 160;
updateUnitLayout();
updateEnergyLayout();
}
});
