import loading from '../assets/Petuon_loading_.gif';

interface LogInOutProps {
    message?: string
    size?: number
    backgroundColor?: string
}

const LogInOut = ({message, size, backgroundColor }: LogInOutProps) => {
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
                width: size, height: size
            }}
            />
            {message &&  <p className='absolute text-white mt-[10rem]'>{message}</p>}
        </div>
    )
}

export default LogInOut