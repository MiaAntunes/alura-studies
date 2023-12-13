import style from './Relogio.module.scss';

interface Props {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
  // Math.floor(...): Esta é uma função que arredonda para baixo para o número inteiro mais próximo.
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  
  // .padStart(2, '0'):  Se o comprimento da string original (representando os minutos) for menor que 2, zeros serão adicionados à esquerda para atingir o comprimento desejado.
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}