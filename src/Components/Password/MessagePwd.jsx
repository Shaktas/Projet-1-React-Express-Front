function MessagePwd(strength) {
  switch (strength.strength) {
    case 0:
      return (
        <p>
          Votre mot de passe à une sécurité très faible, il serait avisé de le
          renforcé. Utilisé le générateur de mots de passe du site ou bien
          renforcer le vous même en rajoutant de la complexité au mot de passe.
          Attention de ne pas utilisé les mêmes mots de passe sur des sites
          differents ou encore des informations qui peuvent être connu
          facilement comme votre anniversaire, le nom de votre animal de
          compagnie ect...
        </p>
      );
    case 1:
    case 2:
      return (
        <p>
          Votre mot de passe à une sécurité faible, il serait avisé de le
          renforcé. Utilisé le générateur de mots de passe du site ou bien
          renforcer le vous même en rajoutant de la complexité ou de la longueur
          au mot de passe. Attention de ne pas utilisé les mêmes mots de passe
          sur des sites differents ou encore des informations qui peuvent être
          connu facilement comme votre anniversaire, le nom de votre animal de
          compagnie ect...
        </p>
      );

    case 3:
      return (
        <p>
          Votre mot de passe à une sécurité moyenne, il présente un certain
          niveau de protection, vous pouvez cependant encore le renforcer.
          Utilisé le générateur de mots de passe du site ou bien renforcer le
          vous même en rajoutant de la complexité ou de la longueur au mot de
          passe. Attention de ne pas utilisé les mêmes mots de passe sur des
          sites differents ou encore des informations qui peuvent être connu
          facilement comme votre anniversaire, le nom de votre animal de
          compagnie ect...
        </p>
      );
    case 4:
    case 5:
      return (
        <p>
          Votre mot de passe à une bonne sécurité, il présente un bon niveau de
          protection, vous pouvez cependant encore le renforcer renforcé.
          Utilisé le générateur de mots de passe du site ou bien renforcer le
          vous même en rajoutant de la complexité ou de la longueur au mot de
          passe. Attention de ne pas utilisé les mêmes mots de passe sur des
          sites differents ou encore des informations qui peuvent être connu
          facilement comme votre anniversaire, le nom de votre animal de
          compagnie ect...
        </p>
      );
    case 6:
      return (
        <p>
          Votre mot de passe à une excelente sécurité, il présente un excelent
          niveau de protection, Attention cependant malgré le resistance de
          votre mot de passe, il existe d&aposautre formes d&aposattaques qui
          permetterait la fuite de vos informations (hameçonnage, logiciel
          espion), redoublez toujours de vigilance !
        </p>
      );

    default:
      break;
  }
}

export default MessagePwd;
