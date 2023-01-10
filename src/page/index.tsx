import { Flex } from '@chakra-ui/react';
import { CardContainer } from '../components/Card';
import { Header } from '../components/Header';

export function Home(){
    return(
        <>
            <Header/>
            <Flex p={'10'} gap={'4'}>
                <CardContainer img="https://hotelcenter.com.br/blog/wp-content/uploads/2016/11/como-e-definida-a-classificacao-por-estrelas-dos-hoteis--e1480361956982.jpg" title={'Hotel benedict'} description="Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of Detective Comics on March 30, 1939." price="450"/>

                <CardContainer img="https://www.viajali.com.br/wp-content/uploads/2016/06/hoteis-vila-barracuda-730x487.jpg" title={'Hotel 5 estrelas'} description="Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of Detective Comics on March 30, 1939." price="600" />

                <CardContainer img="https://omundoepequenoparamim.com.br/wp-content/uploads/2020/09/Hoteis-lua-de-mel-Brasil-3-1536x1025.jpg" title={'Hotel Batman'} description="Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of Detective Comics on March 30, 1939." price="250" />

                <CardContainer img="https://www.reservasnet.com.br/blog/wp-content/uploads/2020/05/hotel-refugio-da-montanha-2.jpg" title={'Hotel Vite'} description="Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of Detective Comics on March 30, 1939." price="900" />
            </Flex>
        </>
    );
}