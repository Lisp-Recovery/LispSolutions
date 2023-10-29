
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { Title } from '@/components/Title';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header/>
      <main className="min-h-screen">
        <Section className='h-[400px] w-full'>
          <div className="h-full w-full bg-[url('/bgIntro.svg')] bg-no-repeat bg-cover">
            <div className='w-full h-full flex justify-center items-center'>
              <div className='bg-[#000000b0] min-h-[50%] p-4 md:p-16 text-white text-center m-0 flex flex-col justify-center'>
                <h1 className='font-medium mb-6 text-4xl'>Lisp Solutions</h1>
                <p className='text-2xl'>Estamos aqui para solucionar os seus problemas!</p>
              </div>
            </div>
          </div>
        </Section>
        <Section className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-8 text-justify'>
          <>
            <Title>Da bactéria ao Bach!</Title>
            <p className='font-normal text-xl mb-12'>
            Como foi possível a natureza produzir um gênio como Bach em 1685 e não milhares de anos depois?
            Podemos resumir em uma palavra: <strong className='font-normal text-primary'>Otimização.</strong>
              <br/><br/>
            Tal arrumação Intracromossomial específica foi resultado de um processo evolucionário em que visava alocar
            os melhores recursos disponíveispara melhor uso dele dentro de um intervalo de tempo, com toda essa maravilha
            genética tivemos grandes mentes como Bach e Mozart que deram saltos em séculos no desenvolvimento musical,
            pressionados pela seleção natural, que visa eficiência na alocação de recursos e tempo.
              <br/><br/>
            Um dos pilares da natureza, o processo de seleção natural e construção de sistemas é a otimização. Fazer menor
            uso de energia para dar o melhor resultado possível dentro do menor espaço de tempo. Nós humanos também temos
            essa característica. Tentamos ao máximo sempre otimizar tudo. Seja a melhor rota para ir ao trabalho, assim
            como tentar criar mecanismos para guardar gigabytes de dados em filamentos de DNA ou tentar criar computadores
            com o mesmo tamanho e eficiência do cérebro humano. Tudo isso advém da necessidade ou vantagem de otimizar.
              <br/><br/>
            Foi o incessante processo de otimização da natureza que fez que tivéssemos tal arrumação intracromossomial.
              <br/><br/>
            O processo de otimização se dar por fazer o melhor uso possível dos recursos disponíveis
              <br/><br/>
              <strong>
              Quais indivíduos têm a maior capacidade de otimizar tais recursos na natureza humana?
                <span className=' text-primary'> Indivíduos com altas habilidades.</span>
              </strong>
              <br/><br/>
            Por esta razão, a simplicidade -- utilizando recursos de forma otimizada -- é a máxima sofisticação -- melhor
            alocação dos recursos e tempo -- por isso, sempre buscamos fazer mais com menos.
            </p>
          </>
        </Section>
        <Section>
          <>
            <Title className='text-center md:text-left'>
            Quem vai resolver os seus problemas inerentemente complexos?
            </Title>
            <div className='flex flex-col items-center md:flex-row md:items-start'>
              <div className='w-1/2 min-w-[12rem]'>
                <div className='border-2 border-primary w-fit mx-auto'>
                  <Image
                    src={'/hindemburg.svg'}
                    alt='Lisp Solutions'
                    width={230}
                    height={230}
                    blurDataURL="/hindemburgBlur.jpg"
                    placeholder="blur"
                    priority
                    quality={1}
                  />
                </div>
              </div>
              <div className='md:ml-8 flex flex-col justify-center items-center md:items-start'>
                <Title marginButtom={0} className="mt-2 md:mt-0 text-center">
                Hindemburg Melão Jr.
                </Title>
                <span className='text-primary text-normal text-center'>Consultor Polímata Técnico-Cientifico</span>
                <p className='text-[#423E3E] text-normal font-medium text-ellipsis overflow-hidden line-clamp-4 md:line-clamp-5 mt-2 text-center md:text-justify'>
                Maior QI registrado no Brasil, recordista de xadrez as cegas e Autor de inovações e melhorias relevantes
                em vários campos científicos, financeiros e educacionais, incluindo melhorias nas obras dos ganhadores do
                Prêmio Nobel William Sharpe, Franco Modigliani, Harry Markowitz, Myron Scholes e outros.
                </p>
                <a
                  href='https://www.sigmasociety.net/hm'
                  target='_blank'
                  className='text-primary hover:underline'
                >
                Saiba Mais
                </a>
              </div>
            </div>
          </>
        </Section>
      </main>
      <footer className='w-full h-48 bg-primary'>
      </footer>
    </>
  );
}
