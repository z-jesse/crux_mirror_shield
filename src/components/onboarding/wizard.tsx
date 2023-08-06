import React, { useState } from "react";

interface wizardProps {
    children: React.ReactNode;
    startingStep: number;
}

export default function Wizard({
    children: _children,
    startingStep= 0,
}: wizardProps) {
    const [activePageIndex, setActivePageIndex] = useState(startingStep);
    const steps = React.Children.toArray(_children);
    const currentStep = steps[activePageIndex];

    const goNextPage = () => {
        setActivePageIndex(index => index + 1);
    };
    
    const goPrevPage = () => {
        setActivePageIndex(index => index - 1);
    };

    const ButtonPrev = () =>
        activePageIndex > 0 ? (
            <button
                type="button"
                onClick={goPrevPage}
            >
                previous
            </button>
        ) : null;
    const ButtonNext = () =>
        activePageIndex < steps.length - 1 ? (
            <button
                type="button"
                onClick={goNextPage}
            >
                continue
            </button>
        ) : null;

    return <>
        {currentStep}
        <ButtonPrev/>
        <ButtonNext/>
    </>
}