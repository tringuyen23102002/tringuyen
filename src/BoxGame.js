
function BoxGame(props) {
    return (
        <div className="boxGame" onClick={() => props.handle_play(props.index)}>
        {props.value}
        </div>
    );
}
export default BoxGame