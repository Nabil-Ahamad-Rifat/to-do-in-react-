
const Here = (props) => {
    return (
        <div>
            <ul>
                <li>name:{props.item['name']}</li>
                <li>age:{props.item['age']}</li>
                <li>city:{props.item['city']}</li>
            </ul>

            <button onClick={props.btnclick}> submit </button>
        </div>
    );
};

export default Here;