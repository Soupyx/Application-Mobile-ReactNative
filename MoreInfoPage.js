import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const MoreInfoPage = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const CharacterDetails = ({ character }) => (
    <View style={styles.characterItem}>
      <Image source={character.image} style={styles.characterImage} />
      <Text style={styles.characterName}>{character.name}</Text>
      <Text style={styles.characterAbilities}>{character.abilities}</Text>
      <Text style={styles.characterStory}>{character.story}</Text>
    </View>
  );

  const characters = [
    {
      name: 'Tracer',
      image: require('./tracer.png'),
      abilities: 'Pulse Pistols, Blink, Recall, Pulse Bomb',
      story: 'Tracer est un ancien pilote d’essai qui est devenu le cobaye d’une expérimentation du Chronal Accelerator qui a désintégré son corps de manière moléculaire. Elle est désormais capable de sauter dans le temps, permettant à son aspect de ne pas être complètement présent à tout moment.'
    },
    {
      name: 'Reaper',
      image: require('./reaper.jpg'),
      abilities: 'Hellfire Shotguns, Wraith Form, Shadow Step, Death Blossom',
      story: 'Gabriel Reyes était autrefois le commandant en second de l’organisation de défense internationale Overwatch. Mais en secret, il cherchait à renverser Overwatch et à devenir un puissant chef de guerre. Après sa mort apparente lors de la chute de la base d’Overwatch, Reyes est revenu sous la forme du terrifiant Reaper.'
    },
    {
      name: 'Widowmaker',
      image: require('./widowmaker.jpg'),
      abilities: 'Widow\'s Kiss, Grappling Hook, Venom Mine, Infra-Sight',
      story: 'Amélie Lacroix était autrefois une ballerine renommée, mais sa vie a changé pour toujours lorsqu’elle a été kidnappée par Talon et soumise à un conditionnement cérébral. Maintenant, en tant que Widowmaker, elle est une tueuse d’élite sans émotion qui est devenue une arme vivante.'
    },
    {
      name: 'Genji',
      image: require('./genji.jpg'),
      abilities: 'Widow\'s Kiss, Grappling Hook, Venom Mine, Infra-Sight',
      story: 'Amélie Lacroix était autrefois une ballerine renommée, mais sa vie a changé pour toujours lorsqu’elle a été kidnappée par Talon et soumise à un conditionnement cérébral. Maintenant, en tant que Widowmaker, elle est une tueuse d’élite sans émotion qui est devenue une arme vivante.'
    },
    {
      name: 'Winston',
      image: require('./winston.jpg'),
      abilities: 'Widow\'s Kiss, Grappling Hook, Venom Mine, Infra-Sight',
      story: 'Amélie Lacroix était autrefois une ballerine renommée, mais sa vie a changé pour toujours lorsqu’elle a été kidnappée par Talon et soumise à un conditionnement cérébral. Maintenant, en tant que Widowmaker, elle est une tueuse d’élite sans émotion qui est devenue une arme vivante.'
    },
    {
      name: 'Chacal',
      image: require('./chacal.jpg'),
      abilities: 'Widow\'s Kiss, Grappling Hook, Venom Mine, Infra-Sight',
      story: 'Amélie Lacroix était autrefois une ballerine renommée, mais sa vie a changé pour toujours lorsqu’elle a été kidnappée par Talon et soumise à un conditionnement cérébral. Maintenant, en tant que Widowmaker, elle est une tueuse d’élite sans émotion qui est devenue une arme vivante.'
    },
    {
      name: 'Lucio',
      image: require('./lucio.jpg'),
      abilities: 'Widow\'s Kiss, Grappling Hook, Venom Mine, Infra-Sight',
      story: 'Amélie Lacroix était autrefois une ballerine renommée, mais sa vie a changé pour toujours lorsqu’elle a été kidnappée par Talon et soumise à un conditionnement cérébral. Maintenant, en tant que Widowmaker, elle est une tueuse d’élite sans émotion qui est devenue une arme vivante.'
    },
    {
      name: 'Mcree',
      image: require('./mcree.jpeg'),
      abilities: 'Widow\'s Kiss, Grappling Hook, Venom Mine, Infra-Sight',
      story: "Jesse McCree est un ancien membre du gang Deadlock, qui autrefois semait la terreur dans le sud-ouest des États-Unis. Après avoir quitté le gang, McCree a trouvé une nouvelle voie en rejoignant l'organisation Overwatch, où il a servi en tant qu'agent d'intervention et tireur d'élite."
    },
    {
      name: 'Baptiste',
      image: require('./baptiste.jpg'),
      abilities: 'Biotic Launcher, Regenerative Burst, Immortality Field, Amplification Matrix',
      story: 'Jean-Baptiste Augustin, communément appelé Baptiste, était autrefois un médecin de combat de la milice caribéenne. Lorsqu’il est devenu évident que la guerre faisait rage dans le monde entier, Baptiste s’est joint à la Talon, une décision qu’il regrette maintenant. Après s’être échappé de l’organisation, Baptiste utilise désormais ses compétences médicales pour aider ceux qui en ont besoin.'
    },
    {
      name: 'Brigitte',
      image: require('./brigitte.jpeg'),
      abilities: 'Rocket Flail, Repair Pack, Whip Shot, Barrier Shield, Shield Bash, Inspire, Rally',
      story: 'Brigitte Lindholm est la fille de Torbjörn Lindholm, le célèbre ingénieur suédois qui a participé à la fondation d’Overwatch. Inspirée par les récits des exploits héroïques d’Overwatch, Brigitte a appris les compétences nécessaires pour devenir ingénieure, spécialisée dans la création d’armures et de gadgets. Elle a rejoint l’équipe d’Overwatch pour protéger les innocents et faire la lumière sur les injustices.'
    },
    {
      name: 'D.Va',
      image: require('./dva.jpg'),
      abilities: 'Fusion Cannons, Boosters, Defense Matrix, Micro Missiles, Self-Destruct, Call Mech',
      story: 'Hana Song, également connue sous le nom de D.Va, était autrefois une célèbre joueuse professionnelle de jeux vidéo. Lorsque les robots Omniaques ont menacé la paix de la Corée du Sud, elle a abandonné sa carrière pour défendre son pays en tant que pilote de méca, devenant rapidement une icône de la défense mondiale.'
    },
    {
      name: 'Echo',
      image: require('./echo.jpg'),
      abilities: 'Tri-Shot, Sticky Bombs, Flight, Focusing Beam, Duplicate',
      story: 'Echo est un robot d’intelligence artificielle créé par Dr. Mina Liao, un ancien membre d’Overwatch. Dotée d’une conscience et de capacités de reproduction digne d’un être humain, Echo est une puissante intelligence artificielle qui peut s’adapter à de nombreuses situations.'
    },
    {
      name: 'Mercy',
      image: require('./mercy.jpg'),
      abilities: 'Caduceus Staff, Caduceus Blaster, Guardian Angel, Resurrect, Angelic Descent, Valkyrie',
      story: 'Angela Ziegler, plus connue sous le nom de Mercy, est une médecin suisse et l’un des fondateurs d’Overwatch. Elle a consacré sa vie à soigner et à protéger les autres, et elle est bien connue pour son aptitude à guérir les blessures les plus graves.'
    },
    {
      name: 'Pharah',
      image: require('./pharah.jpg'),
      abilities: 'Rocket Launcher, Jump Jet, Concussive Blast, Hover Jets, Barrage',
      story: 'Fareeha Amari, également connue sous le nom de Pharah, est la fille d’Ana Amari, une ancienne membre d’Overwatch. Inspirée par l’héritage de sa mère, Pharah s’est engagée dans une carrière militaire et utilise sa technologie de vol pour protéger les innocents.'
    },
    {
      name: 'Torbjörn',
      image: require('./torbjorn.jpeg'),
      abilities: 'Rivet Gun, Forge Hammer, Deploy Turret, Overload, Molten Core',
      story: 'Torbjörn Lindholm est un ingénieur suédois et l’un des fondateurs d’Overwatch. Spécialisé dans la conception d’armes et de gadgets, Torbjörn a joué un rôle crucial dans de nombreuses missions d’Overwatch.'
    },
    {
      name: 'Zarya',
      image: require('./zarya.jpg'),
      abilities: 'Particle Cannon, Particle Barrier, Projected Barrier, Energy Bomb, Graviton Surge',
      story: 'Aleksandra Zaryanova, mieux connue sous le nom de Zarya, est une athlète russe qui est devenue soldat pour défendre son pays contre les robots Omniaques. Avec son armure et son canon à particules, Zarya est une force imposante sur le champ de bataille.'
    },
    {
      name: 'Ana',
      image: require('./ana.jpeg'),
      abilities: 'Biotic Rifle, Sleep Dart, Biotic Grenade, Nano Boost',
      story: 'Ana Amari est une ancienne membre d’Overwatch et une tireuse d’élite égyptienne. Après avoir été donnée pour morte, elle a continué à lutter contre l’injustice en utilisant ses compétences de tireur d’élite et son expertise médicale pour protéger les innocents.'
    },
    {
      name: 'Ashe',
      image: require('./ashe.jpeg'),
      abilities: 'The Viper, Coach Gun, Dynamite, B.O.B.',
      story: 'Elizabeth Caledonia Ashe, souvent appelée Ashe, est la chef du gang Deadlock et une hors-la-loi recherchée. Avec son fidèle compagnon robotique B.O.B., Ashe est une force redoutable sur le champ de bataille.'
    },
    {
      name: 'Bastion',
      image: require('./bastion.jpg'),
      abilities: 'Configuration: Recon, Configuration: Sentry, Reconfigure, Self-Repair, Configuration: Tank',
      story: 'Bastion est un robot omniaque qui a été réveillé des siècles de sommeil par la nature reprenant ses droits sur le monde. Bien qu’il ait été conçu pour la guerre, Bastion a découvert une nouvelle voie en protégeant la nature et les innocents.'
    },
    {
      name: 'Doomfist',
      image: require('./doomfist.jpg'),
      abilities: 'Hand Cannon, Rocket Punch, Seismic Slam, Rising Uppercut, Meteor Strike',
      story: 'Akande Ogundimu, également connu sous le nom de Doomfist, est un chef de guerre impitoyable et le leader de la secte criminelle de Talon. Possédant un gant puissant qui peut déchaîner la puissance d’un tremblement de terre, Doomfist est un adversaire redoutable.'
    },
    {
      name: 'Soldier: 76',
      image: require('./soldier76.jpg'),
      abilities: 'Heavy Pulse Rifle, Helix Rockets, Sprint, Biotic Field, Tactical Visor',
      story: 'Jack Morrison, également connu sous le nom de Soldier: 76, est un ancien commandant d’Overwatch. Après la dissolution de l’organisation, il est devenu un justicier solitaire, cherchant à révéler la vérité sur les événements qui ont conduit à la chute d’Overwatch.'
    },
    
    {
      name: 'Hanzo',
      image: require('./hanzo.jpeg'),
      abilities: 'Storm Bow, Sonic Arrow, Storm Arrows, Lunge, Dragonstrike',
      story: 'Hanzo Shimada est l’un des héritiers du clan criminel Shimada. Après avoir été témoin de la corruption de son frère Genji, Hanzo a renoncé à son héritage et a choisi une nouvelle voie en tant que maître archer, utilisant son talent pour protéger les innocents.'
    },
    {
      name: 'Mei',
      image: require('./mei.jpg'),
      abilities: 'Endothermic Blaster, Cryo-Freeze, Ice Wall, Blizzard',
      story: 'Mei-Ling Zhou est une scientifique chinoise et une écologiste qui a été chargée de surveiller les écosystèmes en Antarctique. Après une catastrophe qui a laissé son équipe bloquée dans la glace, Mei a utilisé son ingéniosité pour survivre et est devenue une championne de la nature.'
    },
    {
      name: 'Orisa',
      image: require('./orisa.jpg'),
      abilities: 'Fusion Driver, Halt!, Fortify, Protective Barrier, Supercharger',
      story: 'Orisa est un robot créé par la jeune ingénieure Efi Oladele pour protéger sa ville natale de Numbani. Avec son sens du devoir et son dévouement pour la protection des innocents, Orisa est devenue une force puissante pour le bien.'
    },
    {
      name: 'Roadhog',
      image: require('./roadhog.jpg'),
      abilities: 'Scrap Gun, Chain Hook, Take A Breather, Whole Hog',
      story: 'Mako Rutledge, plus connu sous le nom de Roadhog, est un hors-la-loi australien et le complice de Junkrat. Avec son armure et son redoutable crochet, Roadhog est une force à ne pas sous-estimer sur le champ de bataille.'
    },
    {
      name: 'Sigma',
      image: require('./sigma.jpeg'),
      abilities: 'Hyperspheres, Accretion, Kinetic Grasp, Experimental Barrier, Gravitic Flux',
      story: 'Sigma est un astrophysicien néerlandais qui a été transformé en arme vivante après avoir été exposé à une expérience sur les trous noirs. Avec ses pouvoirs gravitationnels, Sigma est une menace pour quiconque se met en travers de son chemin.'
    },
    {
      name: 'Sombra',
      image: require('./sombra.jpg'),
      abilities: 'Machine Pistol, Hack, Thermoptic Camo, Translocator, EMP',
      story: 'Olivia Colomar, mieux connue sous le nom de Sombra, est une hackeuse mexicaine et une membre de Talon. Avec ses compétences informatiques et son réseau d’informations, Sombra est capable de manipuler n’importe quel système pour atteindre ses objectifs.'
    },
    {
      name: 'Symmetra',
      image: require('./symmetra.jpg'),
      abilities: 'Photon Projector, Sentry Turret, Photon Barrier, Teleporter, Teleporter: Exit, Teleporter: Entrance',
      story: 'Satya Vaswani, mieux connue sous le nom de Symmetra, est une architecte indienne et une membre de la société Vishkar Corporation. Utilisant la technologie de la lumière, Symmetra peut créer des structures complexes pour manipuler le champ de bataille à son avantage.'
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Plus d'informations sur Overwatch</Text>
        <Text style={styles.description}>
          Overwatch est un jeu de tir à la première personne en équipe
          développé et publié par Blizzard Entertainment. Sorti en mai 2016,
          le jeu est devenu extrêmement populaire et a gagné de nombreux
          prix pour son gameplay innovant et ses graphismes impressionnants.
        </Text>
        <Text style={styles.subtitle}>Personnages</Text>
        <View style={styles.characterContainer}>
          {characters.map((character, index) => (
            <CharacterDetails key={index} character={character} />
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleBack}
        >
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles CSS
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    marginTop: '10%',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  characterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  characterItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '45%',
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  characterAbilities: {
    fontSize: 14,
    marginBottom: 5,
  },
  characterStory: {
    fontSize: 14,
  },
  button: {
    marginTop: '6%',
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MoreInfoPage;
