import loading from '../assets/Petuon_loading_.gif';

interface LogInOutProps {
    message?: string
    size?: "small" | "medium" | "large"
    backgroundColor?: string
}

const LogInOut = ({message, size = "medium", backgroundColor }: LogInOutProps) => {
    const scale = size === "small" ? 100 : size === "medium" ? 200 : 300;
    return (
        <div 
            className="loading-overlay"
            style={{
                backgroundColor
            }}
        >
            <img
            src={loading}
            alt="Loading..."
            className="loading-gif"
            style={{
                width: scale, height: scale
            }}
            />
            {message &&  <p className='absolute text-white mt-[10rem]'>{message}</p>}
        </div>
    )
}

export default LogInOut