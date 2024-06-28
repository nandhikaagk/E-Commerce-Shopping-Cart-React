const Topbar = (props) => {
    console.log(props.categories)
    const handleCategorySelection = (e) => {
        props.setSelectedCategory(e.target.value)
    }
    return (
        <div className="topBar">
            <select onChange={handleCategorySelection}>
                <option value="">Select .....</option>
                {props.categories.map((c) => <option value={c}>{c}</option>)}

            </select>

        </div>
    )
}
export default Topbar;
