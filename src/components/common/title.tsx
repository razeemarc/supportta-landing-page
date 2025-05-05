'use client'

const Title = ({ text = "WHO ARE WE" }) => {
  return (
    <div className="flex items-center justify-center w-full my-4">
      <div className="flex items-center justify-center gap-2.5">
        {/* Left green bar */}
        <div className="w-5 h-1.5 rounded-full bg-green-400"></div>
        
        {/* Text */}
        <h2 
          className="text-center uppercase font-semibold text-sm whitespace-nowrap"
          style={{ 
            fontFamily: 'Inter',
            color: '#E08F34',
          }}
        >
          {text}
        </h2>
        
        {/* Right green bar */}
        <div className="w-5 h-1.5 rounded-full bg-green-400"></div>
      </div>
    </div>
  );
};

export default Title;