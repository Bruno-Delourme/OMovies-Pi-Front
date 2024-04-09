// Importations nécessaires de React pour utiliser les hooks et gérer les événements
import { ChangeEvent, useId } from 'react';
// Importation des styles spécifiques au composant
import './styles.scss';

// Définition des props attendues par le composant Field avec TypeScript
interface FieldProps {
  value: string; // Valeur actuelle du champ, contrôlée par un composant parent
  type?: string; // Type optionnel de l'input (par exemple 'text', 'password', etc.)
  placeholder: string; // Texte à afficher lorsque le champ est vide
  onChange: (value: string) => void; // Fonction à appeler lors de la modification de la valeur du champ
}

function Field({
  value,
  type = 'text', 
  placeholder,
  onChange,
}: FieldProps) {

  // Génération d'un ID unique pour le champ, utile pour relier le label à l'input
  const inputId = useId();

  // Gestion de l'événement de changement pour l'input
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    // Appel de la fonction onChange fournie par le composant parent, avec la nouvelle valeur
    onChange(event.target.value);
  }

  return (

    // Application d'une classe CSS conditionnelle en fonction de la présence de contenu dans le champ
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>

      <input
        value={value} // Liaison de la valeur du champ avec l'état contrôlé par le parent
        onChange={handleChange} // Gestion du changement de valeur
        id={inputId} // Association de l'input avec son label via l'id
        type={type} // Définition du type de l'input
        className="field-input" // Classe CSS pour l'input
        placeholder={placeholder} // Texte d'indication dans le champ vide
      />

      <label
        htmlFor={inputId} // Liaison du label avec l'input correspondant
        className="field-label" // Classe CSS pour le label
      >
        {placeholder} 
      </label>
    </div>
  );
}

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default Field;
