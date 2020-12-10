import React, {FC} from 'react'
import { Link } from "react-router-dom"
import { LinkButton, Container } from "../../layout"


export const Home:FC = () => (
    <Container>
        <h2>Generate fake Mc'Donal coupon</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa eos ipsam eius fugit ut ipsum, illum quisquam illo ad reprehenderit rem praesentium, dicta adipisci hic temporibus quasi, maxime facilis!
        Reprehenderit architecto ea enim explicabo, consequuntur facere tenetur itaque quisquam dolorem dicta dolorum est praesentium culpa ducimus esse quis provident modi ullam ut a ipsa quaerat aut officia!
        </p>
        <LinkButton as={Link} to="/step1" >Lets Start</LinkButton>
    </Container>
)


