import ChuckImage from '../assets/chuck_norris.jpg';

const ChuckCard :React.FC<{greeting:string}>= (props)  =>

        <>
            <h2>{props.greeting}</h2>

            <img src={ChuckImage} alt='A handsome man' /> 
        </>

export default ChuckCard;