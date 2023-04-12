import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function GoogleRedirect() {
    const { idUser } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const jwtCookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('jwt='))
            ?.replace('jwt=', '');

        if (jwtCookie === undefined) {
            navigate('auth/login');
        } else {
            localStorage.setItem('access_token', jwtCookie);
            navigate(`/main/${idUser}`);
        }
    }, []);

    return null;
}

export default GoogleRedirect;
