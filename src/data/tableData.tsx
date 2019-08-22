export const tableData = () => 
    fetch('http://cdn.sbtech.com/rj/mocks/MOCK_DATA.json')
            .then(res => {
                if(res.ok) return res.json()
                else {
                    throw new Error ('Cannot load data...')
                }
            })
            