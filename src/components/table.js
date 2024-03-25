import Row from './row';

export default function Table ({i11, i12, i13, i21, i22, i23, i31, i32, i33}) {
    return (
        <table>
            <tbody>
                <Row i1={i11} i2={i12} i3={i13}/>
                <Row i1={i21} i2={i22} i3={i23}/>
                <Row i1={i31} i2={i32} i3={i33}/>
            </tbody>
        </table>  
    )
}