import { useEffect } from 'react';

import { getCountries } from '~/apis';

function App() {
    useEffect(() => {
        getCountries().then((res) => {
            console.log(res);
        });
    }, []);

    return <></>;
}

export default App;
