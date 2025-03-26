document.addEventListener("DOMContentLoaded", function() {
    let currentStep = 0;
    const steps = document.querySelectorAll(".step");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    showStep(currentStep);

    function showStep(stepIndex) {
        steps[currentStep].style.display = "none";
        currentStep = stepIndex;
        if (currentStep === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "inline";
        }
        if (currentStep === steps.length - 1) {
            nextBtn.innerHTML = "Завершить";
        } else {
            nextBtn.innerHTML = "Вперед";
        }
        steps[currentStep].style.display = "block";
    }

    function nextPrev(stepChange) {
        if (stepChange === 1 && !validateStep(currentStep)) {
            return;
        }
        showStep(currentStep + stepChange);
    }

    function validateStep(stepIndex) {
        return true;
    }

    prevBtn.onclick = () => nextPrev(-1);
    nextBtn.onclick = () => nextPrev(1);
});



