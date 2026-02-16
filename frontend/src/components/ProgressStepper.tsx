import { useEffect, useRef } from 'react';

interface ProgressStepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (index: number) => void;
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({ steps, currentStep, onStepClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeStepRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeStep = activeStepRef.current;
      
      const scrollLeft = activeStep.offsetLeft - (container.offsetWidth / 2) + (activeStep.offsetWidth / 2);
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentStep]);

  return (
    <div ref={containerRef} className="w-full py-4 overflow-x-auto no-scrollbar scroll-smooth">
      <div className="min-w-[600px] md:min-w-full relative px-10">
        <div className="relative flex items-center justify-between w-full">
          {/* Progress Line Background */}
          <div className="absolute top-[11px] left-0 w-full h-[2.5px] bg-gray-100 rounded-full" />
          
          {/* Fill Progressive Line */}
          <div 
            className="absolute top-[11px] left-0 h-[2.5px] bg-[#16a34a] rounded-full transition-all duration-700 ease-in-out shadow-[0_0_5px_rgba(22,163,74,0.3)]"
            style={{ 
              width: `${(currentStep / (steps.length - 1)) * 100}%` 
            }}
          />

          {/* Steps */}
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isUpcoming = index > currentStep;

            return (
              <div 
                key={index} 
                ref={isActive ? activeStepRef : null}
                className="relative flex flex-col items-center flex-1 cursor-pointer group"
                onClick={() => onStepClick?.(index)}
              >
                {/* Small Circle */}
                <div className="relative z-10 flex items-center justify-center mb-3">
                  <div 
                    className={`
                      w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 transform
                      ${isCompleted ? 'bg-[#16a34a]' : ''}
                      ${isActive ? 'bg-white border-2 border-[#16a34a] shadow-sm scale-110' : ''}
                      ${isUpcoming ? 'bg-white border-2 border-gray-100' : ''}
                    `}
                  >
                    {isCompleted ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-[#16a34a]' : 'bg-transparent'}`} />
                    )}
                  </div>
                </div>

                {/* Label */}
                <div className="text-center px-2 flex-none">
                  <span className={`
                    text-xs md:text-sm transition-all duration-500 block whitespace-nowrap
                    ${isCompleted ? 'text-[#16a34a] font-semibold' : ''}
                    ${isActive ? 'text-[#16a34a] font-bold' : ''}
                    ${isUpcoming ? 'text-gray-300 font-medium' : ''}
                  `}>
                    {step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
