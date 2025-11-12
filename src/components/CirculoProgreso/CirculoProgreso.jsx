import "./circuloProgreso.css";

export const CirculoProgreso = ({ porcentaje }) => {
  const radio = 50;
  const circunferencia = 2 * Math.PI * radio;
  const offset = circunferencia - (porcentaje / 100) * circunferencia;

  return (
    <div className="contenedor-circulo-progreso">
      <svg viewBox="0 0 120 120" className="circular-progress">
        <circle className="fondo" r={radio} cx="60" cy="60" />
        <circle
          className="progreso"
          r={radio}
          cx="60"
          cy="60"
          strokeDasharray={circunferencia}
          strokeDashoffset={offset}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="texto"
        >
          {porcentaje}%
        </text>
      </svg>
    </div>
  );
};
