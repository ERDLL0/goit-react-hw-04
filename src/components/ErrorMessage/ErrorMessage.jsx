import css from './ErrorMessage.module.css';

const ErrorMessage = ({ message = 'Something went wrong. Please try again later.' }) => {
    return (
        <div className={css.error}>
            <p>{message}</p>
        </div>
    );
};

export default ErrorMessage;
