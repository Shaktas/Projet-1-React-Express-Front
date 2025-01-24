import PropTypes from "prop-types";

function MessagePwd(strength) {
  switch (strength.strength) {
    case 0:
      return (
        <p>
          Votre mot de passe à une sécurité très faible, il serait avisé de le
          renforcer. Utilisé le générateur de mots de passe du site ou bien
          renforcé le vous-même en rajoutant de la complexité au mot de passe.
          Attention de ne pas utiliser les mêmes mots de passe sur des sites
          différents ou encore des informations qui peuvent être connu
          facilement comme votre anniversaire, le nom de votre animal de
          compagnie etc.
        </p>
      );
    case 1:
    case 2:
      return (
        <p>
          Votre mot de passe a une sécurité faible, il serait avisé de le
          renforcer. Utilisez le générateur de mots de passe du site ou bien
          renforcez-le vous-même en rajoutant de la complexité ou de la longueur
          au mot de passe. Attention à ne pas utiliser les mêmes mots de passe
          sur des sites différents ou encore des informations qui peuvent être
          connues facilement comme votre anniversaire, le nom de votre animal de
          compagnie etc.
        </p>
      );

    case 3:
      return (
        <p>
          Votre mot de passe a une sécurité moyenne, il présente un certain
          niveau de protection, vous pouvez cependant encore le renforcer.
          Utilisez le générateur de mots de passe du site ou bien renforcez-le
          vous-même en rajoutant de la complexité ou de la longueur au mot de
          passe. Attention à ne pas utiliser les mêmes mots de passe sur des
          sites différents ou encore des informations qui peuvent être connues
          facilement comme votre anniversaire, le nom de votre animal de
          compagnie etc.
        </p>
      );
    case 4:
    case 5:
      return (
        <p>
          Votre mot de passe a une bonne sécurité, il présente un bon niveau de
          protection, vous pouvez cependant encore le renforcer. Utilisez le
          générateur de mots de passe du site ou bien renforcez-le vous-même en
          rajoutant de la complexité ou de la longueur au mot de passe.
          Attention à ne pas utiliser les mêmes mots de passe sur des sites
          différents ou encore des informations qui peuvent être connues
          facilement comme votre anniversaire, le nom de votre animal de
          compagnie etc.
        </p>
      );
    case 6:
      return (
        <p>
          Votre mot de passe a une excellente sécurité, il présente un excellent
          niveau de protection. Attention cependant, malgré la résistance de
          votre mot de passe, il existe d&apos;autres formes d&apos;attaques qui
          permettraient la fuite de vos informations (hameçonnage, logiciel
          espion). Redoublez toujours de vigilance !
        </p>
      );

    default:
      break;
  }
}

MessagePwd.propTypes = {
  strength: PropTypes.number,
};

export default MessagePwd;
