export const createRunner = (recipe) => {
    let index = 0;
    let startTime = 0;
    let timer = null;
    const getCurrentStep = () => recipe.steps[index];
    const isFinished = () => index >= recipe.steps.length;
    const goToNextStep = () => !isFinished() && index++;
    const goToPreviousStep = () => index && index--;
    const resetCurrentStep = () => startTime = Date.now();
    const startTimer = () => {
        startTime = Date.now();
        timer = setInterval(checkEnd, 1000);
    };
    const stopTimer = () => timer && clearInterval(timer);
    const getProgress = () => {
        const s = getCurrentStep();
        return (Date.now() - startTime) / (s.duration * 1000);
    };
    const onTimerEnd = (cb) => endCb = cb;
    let endCb = () => { };
    const checkEnd = () => getProgress() >= 1 && endCb();
    return {
        getCurrentStep,
        isFinished,
        goToNextStep,
        goToPreviousStep,
        resetCurrentStep,
        startTimer,
        stopTimer,
        getProgress,
        onTimerEnd,
    };
};
