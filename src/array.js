import urumaki from '../assets/imagens/urumaki.jpg';
import urumaki_atum from '../assets/imagens/uramaki-atum.jpg';
import sushi from '../assets/imagens/sushi.jpg';
import sushi_atum from '../assets/imagens/sushi-atum.jpeg';
import sashimi_salmao from '../assets/imagens/sashimi-salmao.jpg';
import sashimi_atum from '../assets/imagens/sashimi-atum.jpg';
import roll from '../assets/imagens/roll.jpg';
import hot_roll from '../assets/imagens/hot-roll.jpg';
import yakisoba_frango from '../assets/imagens/yakisoba-frango.jpg';
import yakisoba_legumes from '../assets/imagens/yakisoba-legumes.png';
import yakitori_ebi from '../assets/imagens/yakitori-ebi.jpg';
import yakitori_ika from '../assets/imagens/yakitori-ika.jpg';
import temaki_salmao from '../assets/imagens/temaki-salmao.jpg';
import temaki_atum from '../assets/imagens/temaki-atum.png';
import shimeji from '../assets/imagens/shimeji.jpg';
import shitake from '../assets/imagens/shitake.jpg';
import gyoza from '../assets/imagens/gyoza.jpg';
import tempura_camarao from '../assets/imagens/tempura-camarao.jpg';
import tempura_salmao from '../assets/imagens/tempura-salmao.jpg';

const menu = [
    {name:"Uramaki (Salmão)" , description: "Contém Arroz, alga, salmão, cream cheese e cebolinha", category: "Roll", suggested: false, image: urumaki},
    {name:"Uramaki (Atum)" , description: "Contém Arroz, alga, atum, cream cheese e cebolinha", category: "Roll", suggested: false, image: urumaki_atum},
    {name:"Sushi (Salmão)" , description: "Arroz coberto por uma lâmina de salmão", category: "Sushi", suggested: true, image: sushi},
    {name:"Sushi (Atum)" , description: "Arroz coberto por uma lâmina de atum", category: "Sushi", suggested: false, image: sushi_atum},
    {name:"Roll Tradicional" , description: "Enrolado de alga nori com Arroz, Cream Cheese e Salmão", category: "Roll", suggested: false, image: roll},
    {name:"Hot Filadelfia" , description: "Empanado de alga crocante, arroz, salmão, cream cheese e cebolinha.", category: "Roll", suggested: false, image: hot_roll},
    {name:"Yakisoba (Frango)" , description: "Macarrão oriental, frango, repolho, cenoura e brócolis americano.", category: "Yakisoba", suggested: false, image: yakisoba_frango},
    {name:"Yakisoba (Legumes)" , description: "Macarrão oriental, repolho, cenoura e brócolis americano", category: "Yakisoba", suggested: false, image: yakisoba_legumes},
    {name:"Yakitori (Ebi)" , description: "Espetinho de camarão.", category: "Yakitori", suggested: false, image: yakitori_ebi},
    {name:"Yakitori (Ika)" , description: "Espetinho de lula.", category: "Yakitori", suggested: false, image: yakitori_ika},
    {name:"Temaki (Salmão)" , description: "Cones feitos de alga recheado com salmão, arroz e cebolinha.", category: "Temaki", suggested: false, image: temaki_salmao},
    {name:"Temaki (Atum)" , description: "Cones feitos de alga recheado com atum, arroz e cebolinha.", category: "Temaki", suggested: false, image: temaki_atum},
    {name:"Sashimi (Salmão)" , description: "Fatias finas de salmao cru.", category: "Sashimi", suggested: true, image: sashimi_salmao},
    {name:"Sahimi (Atum)" , description: "Fatias finas de atum cru.", category: "Sashimi", suggested: false, image: sashimi_atum},
    {name:"Shimeji" , description: "Porção de cogumelos Shimeki na manteiga", category: "Cogumelos", suggested: false, image: shimeji},
    {name:"Shitake" , description: "Porção de cogumelos Shitake na manteiga", category: "Cogumelos", suggested: false, image: shitake},
    {name:"Gyoza (Carne)" , description: "Bolinho frito recheado com carne", category: "Gyoza", suggested: true, image: gyoza},
    {name:"Gyoza (Legumes)" , description: "Bolinho frito recheado com legumes", category: "Gyoza", suggested: false, image: gyoza},
    {name:"Tempurá (Camarão)" , description: "Camarões fritos em uma massa leve.", category: "Tempura", suggested: false, image: tempura_camarao},
    {name:"Tempura (Salmão)" , description: "Salmão frito em uma massa leve.", category: "Tempura", suggested: true, image: tempura_salmao}
]

export default menu