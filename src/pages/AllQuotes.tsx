import { useNavigate } from 'react-router-dom';
import { data } from '../assets/constant';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

export const AllQuotes = () => {
    const navigate = useNavigate();
    return (
        <div
            className=""
            style={{
                height: '100vh',
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
            }}
        >
            <div
                style={{
                    height: '65%',
                    paddingInline: '20%',
                    overflowY: 'scroll',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    {data.map((item) => (
                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <div>
                                <FaQuoteLeft size="28px" />
                                <span>{item.quote}</span>
                                <FaQuoteRight
                                    size="28px"
                                    style={{ marginBottom: '-10px' }}
                                />
                            </div>
                            <span
                                style={{
                                    display: 'flex',
                                    justifyContent: 'right',
                                }}
                            >
                                ~&nbsp;{item.source}
                            </span>
                        </div>
                    ))}
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'left',
                        }}
                    ></div>
                </div>
            </div>
            <motion.button
                onClick={() => navigate('/')}
                style={{ marginTop: '20px', backgroundColor: '#3e00a0' }}
            >
                Go Back
            </motion.button>
        </div>
    );
};
