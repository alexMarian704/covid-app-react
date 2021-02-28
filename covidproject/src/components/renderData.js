
const Render = ({country , index}) => {
    return (
        <div className="country">
            <h1>{country.Country }</h1>
            <h1>{country.NewCases}</h1>
        </div>
    )
}

export default Render;