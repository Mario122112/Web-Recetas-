export interface RecipeEditorial {
  introduction: string;
  technique: string;
  variations: string;
  serving: string;
}

export const RECIPE_EDITORIAL: Record<string, RecipeEditorial> = {
  'espaguetis-a-la-carbonara': {
    introduction: 'La carbonara romana se construye con muy pocos ingredientes, por eso importa cómo se tratan. El guanciale aporta grasa y sabor; el pecorino, un punto salino; y los huevos crean una salsa ligada, no una tortilla. No lleva nata: la textura llega del queso, el huevo y el agua con almidón.',
    technique: 'Retira la sartén del fuego antes de incorporar la mezcla de huevo. Si la superficie está demasiado caliente, el huevo cuajará en grumos; si está templada, el queso se funde y cubre los espaguetis. Añade el agua de cocción de cucharada en cucharada y remueve con energía.',
    variations: 'El guanciale es la opción romana, aunque una panceta curada de buena calidad funciona en una cocina cotidiana. El pecorino tiene un sabor más intenso que el parmesano; puedes mezclarlos si prefieres un resultado menos salado. Ajusta la sal del agua con moderación porque el queso y la carne ya aportan bastante.',
    serving: 'Sirve inmediatamente en platos calientes y añade pimienta negra justo antes de llevarla a la mesa.',
  },
  'pasta-al-pomodoro': {
    introduction: 'Un buen pomodoro no necesita una lista larga: tomate, ajo, albahaca y aceite de oliva. El resultado depende del tiempo que le des a la salsa y de la calidad del tomate. Si es verano, unos tomates maduros pueden sustituir al tomate en conserva; fuera de temporada, una conserva sencilla suele ofrecer un sabor más constante.',
    technique: 'Empieza el ajo en aceite frío o templado y retíralo cuando esté fragante, antes de que se oscurezca. Deja que el tomate pierda el sabor crudo a fuego suave. La albahaca se añade al final para conservar su aroma, y el agua de la pasta ayuda a que la salsa se adhiera en lugar de quedarse en el fondo.',
    variations: 'Para una salsa más dulce, cocina una cebolla pequeña junto al ajo; para un sabor más concentrado, deja reducir el tomate unos minutos extra. Un poco de parmesano es opcional: el plato también queda redondo sin queso. Si usas tomates frescos, escáldalos y pélalos para una textura más fina.',
    serving: 'Acompáñala con una ensalada verde y guarda un trozo de pan para la salsa.',
  },
  'penne-allarrabbiata': {
    introduction: 'Arrabbiata significa «enfadada» y alude al picante de la guindilla, no a una salsa complicada. El tomate se cocina con ajo y aceite, y los penne recogen bien la salsa en sus estrías. La intensidad se puede ajustar desde el principio: empieza con poca guindilla y añade más al probar.',
    technique: 'Infusiona la guindilla unos segundos en el aceite sin quemar el ajo. Si se tuesta demasiado, el picante puede volverse amargo. Reduce el tomate hasta que tenga cuerpo y termina la pasta en la sartén con un chorrito de agua de cocción; así la salsa no queda acuosa ni separada.',
    variations: 'La receta tradicional suele ser sencilla y no necesita nata ni azúcar. Puedes usar tomates enteros en conserva y aplastarlos con una cuchara para una salsa con textura. Si no encuentras penne, rigatoni o macarrones también sirven. Para una versión menos picante, retira las semillas de la guindilla.',
    serving: 'Termina con perejil o albahaca y ofrece queso rallado aparte.',
  },
  'bucatini-allamatriciana': {
    introduction: 'La amatriciana combina la intensidad del guanciale con tomate y pecorino. Los bucatini, largos y huecos, llevan la salsa por fuera y por dentro, aunque unos espaguetis gruesos también funcionan. Es un plato con carácter y pocos ingredientes, así que conviene tenerlos preparados antes de empezar.',
    technique: 'Dora el guanciale a fuego medio para que suelte la grasa poco a poco y quede crujiente sin resecarse. Si añades vino, deja que se evapore por completo antes del tomate. Reserva parte de la carne para el final: mantener algo crujiente aporta contraste con la salsa.',
    variations: 'El guanciale aporta el sabor más característico; la panceta es una alternativa doméstica fácil de encontrar, aunque su resultado no es idéntico. Ajusta la sal después de añadir el pecorino y prueba antes de incorporar más. Un toque de guindilla es opcional, no hace falta para que la salsa tenga profundidad.',
    serving: 'Ralla el pecorino al momento y sirve la pasta recién mezclada.',
  },
  'pesto-genoves-casero': {
    introduction: 'El pesto genovés es una salsa cruda: la albahaca no se cocina, por lo que conserva su frescor y su color. Piñones, ajo, queso y aceite completan la mezcla. Puede prepararse en mortero para controlar la textura o con batidora usando pulsos cortos y evitando que las hojas se calienten.',
    technique: 'Lava la albahaca y sécala por completo; el agua puede apagar el sabor y hacer que el pesto se oxide antes. Tritura primero el ajo y los piñones, incorpora las hojas y añade el aceite poco a poco. Mezcla el queso al final y liga la salsa con agua de cocción, no con más aceite.',
    variations: 'Los piñones se pueden reemplazar por nueces o almendras, aunque cambia el sabor. Si quieres congelar pesto, guarda la mezcla sin queso en porciones pequeñas y añade el queso al descongelar. Evita calentar el pesto directamente en la sartén: mézclalo fuera del fuego con la pasta caliente.',
    serving: 'Prueba este pesto con trofie, linguine o patatas cocidas como guarnición.',
  },
  'lasana-a-la-bolonesa': {
    introduction: 'La lasaña a la boloñesa es un plato de capas: pasta, ragú, bechamel y queso. La paciencia se reparte entre la salsa y el reposo final. Un ragú preparado con antelación gana tiempo el día del montaje, y una bechamel fluida ayuda a que las láminas se cocinen de manera uniforme.',
    technique: 'Extiende una capa fina de salsa en la base para evitar que la primera lámina se pegue. No inundes cada nivel: demasiada salsa hace que las porciones se desarmen. Deja reposar la fuente al salir del horno durante al menos diez minutos; el calor residual termina de asentar las capas.',
    variations: 'Puedes preparar el ragú el día anterior y guardarlo refrigerado, o emplear láminas que no necesiten cocción previa siguiendo las instrucciones del paquete. Para más sabor, mezcla parmesano con mozzarella en la superficie. Si la parte superior se dora demasiado pronto, cúbrela con papel de aluminio.',
    serving: 'Corta porciones con un cuchillo afilado y acompaña con hojas verdes.',
  },
  'macarrones-con-tomate-y-queso': {
    introduction: 'Los macarrones con tomate y queso son sencillos, pero se pueden mejorar con una salsa hecha en casa en vez de añadir tomate directamente a la pasta. La cebolla aporta dulzor, el orégano da aroma y el gratinado crea una superficie dorada que contrasta con el interior tierno.',
    technique: 'Cuece los macarrones uno o dos minutos menos si van a pasar por el horno: terminarán de hacerse al gratinar. Antes de mezclarlos, comprueba que la salsa esté sabrosa y no demasiado líquida. Si el queso se dora rápido, coloca la fuente en una rejilla más baja o baja un poco la temperatura.',
    variations: 'Añade champiñones salteados, espinacas o unas aceitunas para cambiar el plato sin complicarlo. El queso rallado puede ser mozzarella para un gratinado elástico, parmesano para más sabor, o una mezcla de ambos. También se puede omitir el horno y servir la pasta apenas se mezcla con la salsa.',
    serving: 'Una ensalada de tomate o unas verduras asadas completan la comida.',
  },
  'ragu-bolonesa-tradicional': {
    introduction: 'El ragú boloñés es una salsa de cocción lenta, no un tomate rápido con carne. Zanahoria, apio y cebolla forman la base; la carne se dora antes de incorporar el tomate y el líquido. El tiempo suaviza los ingredientes y concentra el sabor, por eso es una buena receta para cocinar de más.',
    technique: 'Pica las verduras de un tamaño parecido para que se cocinen de forma uniforme. Dora la carne por tandas si la olla está llena: amontonarla hace que suelte agua y se cueza en vez de dorarse. Mantén un hervor muy suave, removiendo de vez en cuando y añadiendo un poco de agua si la salsa se seca.',
    variations: 'La carne de ternera se puede combinar con cerdo para un ragú más jugoso. La leche, que se añade tradicionalmente en algunas versiones, suaviza la acidez y redondea la salsa. Si el tomate es muy ácido, deja que la cocción lenta lo equilibre antes de añadir azúcar.',
    serving: 'Pruébalo con tagliatelle y congela el ragú sobrante en porciones.',
  },
  'espaguetis-alla-puttanesca': {
    introduction: 'La puttanesca reúne ingredientes de despensa con sabores intensos: tomate, aceitunas, alcaparras y ajo. Como las alcaparras y las aceitunas ya son saladas, conviene probar la salsa antes de añadir sal. Es una receta rápida que funciona especialmente bien cuando no hay ingredientes frescos a mano.',
    technique: 'Enjuaga las alcaparras si vienen conservadas en sal y escúrrelas bien si están en vinagre. Añádelas al aceite junto con el ajo para que perfumen la base. Incorpora las aceitunas troceadas y deja que el tomate reduzca; la salsa debe tener sabor concentrado, no quedar como una sopa.',
    variations: 'Las anchoas son habituales en muchas versiones y se pueden fundir en el aceite al principio, pero son opcionales. Usa aceitunas negras o verdes según lo que tengas y ajusta el picante con guindilla. Si no tienes espaguetis, prueba con linguine o una pasta corta que retenga los trozos.',
    serving: 'Termina con perejil fresco y sirve sin añadir demasiado queso.',
  },
  'cacio-e-pepe': {
    introduction: 'Cacio e pepe convierte pecorino y pimienta en una salsa gracias al almidón de la pasta. No lleva nata: una emulsión bien hecha es suficiente para cubrir los tonnarelli. Es una receta corta de ingredientes, pero requiere tener todo medido y trabajar con rapidez cuando la pasta está lista.',
    technique: 'Ralla el pecorino muy fino y mézclalo con agua de cocción tibia, no hirviendo, para formar una crema sin grumos. Añade la pasta a la sartén de pimienta y apaga el fuego antes de incorporar el queso. Si la salsa se espesa, aligérala con pequeñas cantidades de agua.',
    variations: 'El pecorino romano da el sabor salino característico; una parte de parmesano puede suavizarlo, aunque ya no será la versión más tradicional. Tuesta la pimienta justo antes de usarla para liberar su aroma. No añadas toda el agua de golpe: es más fácil corregir una salsa espesa que una demasiado líquida.',
    serving: 'Sirve enseguida: la emulsión es más sedosa justo al terminar.',
  },
  'fettuccine-alfredo': {
    introduction: 'Los fettuccine Alfredo de estilo italiano se preparan emulsionando mantequilla y parmesano con agua de cocción. El resultado es cremoso sin necesitar nata. La pasta ancha hace que cada cinta quede cubierta, pero la técnica funciona también con otras variedades largas si se mezcla mientras aún está muy caliente.',
    technique: 'Ralla el parmesano fino para que se funda con facilidad y ten preparada la taza de agua reservada. Añade el queso poco a poco mientras mueves la pasta; alterna con pequeñas cantidades de agua hasta formar una salsa lisa. Si la sartén está demasiado caliente, el queso puede apelmazarse.',
    variations: 'Puedes añadir pimienta negra o un poco de nuez moscada, pero deja que la mantequilla y el queso sigan siendo protagonistas. La nata no es necesaria para ligar esta versión. Si no tienes fettuccine, usa tagliatelle y ajusta el agua de cocción según la cantidad de salsa que absorba.',
    serving: 'Acompaña con verduras verdes salteadas para equilibrar la riqueza del plato.',
  },
  'lasana-de-verduras-asadas': {
    introduction: 'Asar las verduras antes de montar la lasaña concentra su sabor y evita que suelten demasiada agua durante el horneado. Calabacín, berenjena y pimiento forman una base versátil; puedes aprovechar otras verduras de temporada siempre que no tengan un exceso de humedad.',
    technique: 'Corta las verduras en dados parecidos y extiéndelas en una bandeja sin amontonarlas. Si quedan juntas, se cocerán al vapor en vez de dorarse. Deja que pierdan algo de calor antes de montar las capas, y procura que la bechamel y el tomate no estén demasiado líquidos.',
    variations: 'Añade espinacas salteadas o champiñones bien dorados para variar el relleno. Para una versión vegana, prepara una bechamel vegetal y comprueba que las láminas no contengan huevo. Si las verduras son muy jugosas, aumenta unos minutos su horneado antes de armar la fuente.',
    serving: 'Déjala reposar antes de cortar y acompaña con una ensalada sencilla.',
  },
  'pasta-al-limon-y-ricotta': {
    introduction: 'La ricotta aporta una cremosidad suave y el limón evita que la pasta resulte pesada. Es importante usar también la ralladura: ahí está buena parte del aroma cítrico. La salsa se prepara sin hervir y se termina con el calor de la pasta, por lo que conviene tenerla lista antes de escurrir.',
    technique: 'Ralla solo la parte amarilla de la piel para evitar el amargor de la zona blanca. Mezcla la ricotta con queso y un poco de agua caliente hasta que quede untuosa. Incorpora la pasta poco a poco: cada tipo absorbe distinta cantidad de líquido, así que ajusta la textura al final.',
    variations: 'La albahaca se puede cambiar por perejil o menta fresca. Si no tienes ricotta, un queso fresco cremoso puede servir, aunque quizá necesites más agua para aligerarlo. Añade el zumo de limón poco a poco y prueba: su intensidad cambia según el tamaño y madurez del fruto.',
    serving: 'Termina con pimienta negra y sirve con una ensalada de hojas tiernas.',
  },
  'pasta-cremosa-de-champinones': {
    introduction: 'El sabor de esta pasta depende de dorar bien los champiñones. Si se cocinan amontonados o en una sartén fría, pueden soltar agua y quedar blandos. La nata une los jugos de la sartén, mientras el tomillo y el ajo añaden aroma sin ocultar el sabor de las setas.',
    technique: 'Limpia los champiñones con un paño o un cepillo y córtalos de grosor parecido. Calienta bien la sartén y cocínalos en una sola capa; si hace falta, trabaja en dos tandas. Sala al final del dorado, cuando ya hayan perdido parte de su humedad.',
    variations: 'Una mezcla de champiñones y setas de temporada da más profundidad. Para una salsa menos rica, sustituye parte de la nata por agua de cocción y parmesano. Puedes añadir espinacas al final, dejando que se marchiten con el calor de la salsa.',
    serving: 'Un poco de perejil fresco y parmesano rallado son suficientes para terminar.',
  },
  'pasta-con-salmon-y-limon': {
    introduction: 'Salmón, nata, eneldo y limón forman una salsa rápida para una comida completa. El pescado necesita poco tiempo: si se cocina de más, pierde jugosidad y se deshace al mezclarlo. Corta dados uniformes para que se hagan al mismo ritmo y mantén la salsa a fuego suave.',
    technique: 'Seca el salmón antes de ponerlo en la sartén y dóralo sin moverlo durante el primer minuto. Termina la cocción dentro de la salsa, donde quedará más tierno. Añade el zumo de limón poco a poco al final; el calor intenso puede cortar la nata.',
    variations: 'El eneldo combina muy bien, pero cebollino o perejil también funcionan. Para una versión más ligera, emplea leche evaporada o una mezcla de caldo y un poco de nata. Las espinacas se pueden añadir a la salsa un minuto antes de incorporar la pasta.',
    serving: 'Sirve con una ensalada crujiente y una rodaja de limón al lado.',
  },
  'pasta-con-atun-y-tomate': {
    introduction: 'Atún en conserva y tomate son ingredientes prácticos para una pasta de diario. Escurrir bien el pescado ayuda a controlar el aceite y la sal; incorporarlo al final evita que se seque o se convierta en migas demasiado pequeñas. Las aceitunas añaden un toque salino que se puede ajustar al gusto.',
    technique: 'Prepara la salsa de tomate primero y deja que reduzca antes de añadir el atún. Si lo incorporas desde el principio, puede perder textura durante la cocción. Mezcla la pasta con un poco del agua de cocción para que el tomate se adhiera a cada pieza.',
    variations: 'Puedes usar atún al natural o en aceite de oliva; en este último caso, aprovecha una pequeña cantidad del aceite para sofreír la cebolla. Alcaparras, guisantes o pimiento asado son añadidos posibles. Prueba antes de salar porque el atún y las aceitunas ya tienen sal.',
    serving: 'Termina con perejil y disfruta recién hecha o templada al día siguiente.',
  },
  'pasta-primavera': {
    introduction: 'La pasta primavera es una manera flexible de aprovechar verduras frescas. Para que cada ingrediente conserve textura, no todas las verduras se cocinan el mismo tiempo: los espárragos necesitan más que los guisantes, y el calabacín debe quedar tierno pero no deshecho.',
    technique: 'Corta las verduras de un tamaño que permita comerlas junto con la pasta. Cuece las más firmes primero y añade las delicadas al final. El agua de cocción, el aceite y el parmesano forman un aliño ligero: mezcla en la sartén en lugar de añadir una salsa pesada.',
    variations: 'Elige las verduras que estén de temporada: brócoli, habas o judías verdes pueden reemplazar parte de la receta. Para más proteína, incorpora garbanzos o alubias blancas. Unas hojas de menta o albahaca y la ralladura de limón refrescan el plato.',
    serving: 'Sirve caliente con parmesano aparte para que cada persona ajuste la cantidad.',
  },
  'pasta-a-los-cuatro-quesos': {
    introduction: 'Una salsa de varios quesos permite aprovechar pequeños trozos que quedan en la nevera. El equilibrio es importante: combina un queso intenso, como gorgonzola, con otros que fundan suavemente. La leche ayuda a unirlos sin convertir la salsa en una mezcla demasiado espesa.',
    technique: 'Ralla o trocea los quesos antes de encender el fuego y caliéntalos lentamente. Evita que la leche hierva: el calor fuerte puede separar la grasa y dejar una salsa granulosa. Incorpora la pasta recién escurrida y usa agua de cocción para aligerar si se espesa.',
    variations: 'Puedes cambiar fontina por gouda o emmental y ajustar el queso azul según lo intenso que te guste. Si la salsa queda demasiado potente, añade un poco más de leche y parmesano suave. Una pizca de nuez moscada acompaña bien, pero no es imprescindible.',
    serving: 'Una ensalada de rúcula y pera aporta frescor junto al queso.',
  },
  'pasta-con-berenjena-y-tomate': {
    introduction: 'La pasta alla Norma combina berenjena con tomate y albahaca, una mezcla inspirada en la cocina siciliana. Dorar la berenjena por separado evita que absorba demasiada salsa y ayuda a mantener sus bordes tostados. La ricotta salata aporta un contraste salino, aunque se puede adaptar.',
    technique: 'Corta la berenjena en dados y dórala en una sartén amplia; si está muy húmeda, sécala antes. Añade el tomate cuando el ajo ya esté fragante y deja que reduzca. Incorpora la berenjena al final para que se impregne sin deshacerse.',
    variations: 'Si no encuentras ricotta salata, usa parmesano o pecorino. Para reducir la cantidad de aceite, asa los dados de berenjena en el horno con una capa fina de aceite. Unas hojuelas de guindilla van bien si te apetece un final picante.',
    serving: 'Añade la albahaca justo antes de servir para conservar su aroma.',
  },
  'pasta-con-pollo-y-pesto': {
    introduction: 'El pesto ya tiene aceite, hierbas y queso, así que basta con una pequeña cantidad para vestir toda la pasta. El pollo aporta proteína y los tomates cherry una nota fresca. Para una salsa más ligera, el agua de cocción ayuda a extender el pesto sin agregar más aceite.',
    technique: 'Corta la pechuga en tiras del mismo grosor y dóralas sin llenar demasiado la sartén. Comprueba que el centro esté completamente cocinado antes de servir. Mezcla el pesto fuera del fuego para que la albahaca mantenga su frescor y el queso no se apelmace.',
    variations: 'Puedes usar pollo asado sobrante: añádelo al final solo para calentarlo. Los tomates secos ofrecen un sabor más concentrado que los cherry, y las espinacas se incorporan fácilmente a la mezcla. El pesto casero o comprado sirve; revisa la sal antes de añadir más.',
    serving: 'Termina con parmesano y unas hojas de albahaca si tienes.',
  },
  'linguine-con-gambas-y-ajo': {
    introduction: 'Las gambas al ajillo tienen una cocción corta y agradecen una salsa sencilla de ajo, aceite y perejil. Los linguine se mezclan directamente con los jugos de la sartén, así que reserva agua de cocción y no enjuagues la pasta: el almidón facilita que todo quede ligado.',
    technique: 'Seca las gambas para que se doren en vez de cocerse en el líquido que sueltan. Añádelas cuando el ajo apenas empiece a tomar color y retíralas del fuego en cuanto estén opacas. Si se cocinan demasiado, pierden ternura; pueden terminar de hacerse al mezclar la pasta.',
    variations: 'Una pizca de guindilla aporta calor sin tapar el sabor del marisco. Puedes reemplazar parte del aceite por un poco de mantequilla, o añadir ralladura de limón al final. Si usas gambas congeladas, descongélalas y sécalas bien antes de cocinarlas.',
    serving: 'Llévala a la mesa enseguida con perejil fresco y limón.',
  },
  'pasta-con-calabacin-y-parmesano': {
    introduction: 'El calabacín rallado se deshace al saltearse y ayuda a crear una salsa suave sin nata. Combinarlo con trozos dorados añade textura y hace que el plato resulte más interesante. Es una receta útil para dar salida a calabacines grandes, que suelen tener más humedad.',
    technique: 'Ralla una parte del calabacín y escurre el exceso de líquido con las manos si está muy acuoso. Dora las medias lunas por separado para que tomen color, y deja que la parte rallada se cocine hasta formar una base tierna. Liga con agua de pasta y parmesano.',
    variations: 'Menta o albahaca dan un aroma fresco; la ralladura de limón aporta un punto más cítrico. Puedes sustituir parte del parmesano por pecorino, teniendo en cuenta que es más salado. Para más contraste, añade nueces tostadas justo antes de servir.',
    serving: 'Un toque de pimienta negra y aceite de oliva remata el plato.',
  },
  'pasta-al-horno-con-mozzarella': {
    introduction: 'Esta pasta al horno combina salsa de tomate con mozzarella fundida y bordes gratinados. La clave es dejar la pasta ligeramente poco hecha antes de llevarla a la fuente: el horneado continúa la cocción. Una salsa espesa evita que el fondo quede aguado.',
    technique: 'Escurre bien la mozzarella y córtala en trozos; si está muy húmeda, sécala con papel. Mezcla la pasta con suficiente salsa para cubrirla, pero guarda un poco para el fondo. Gratina hasta que el queso burbujee y deja reposar unos minutos antes de servir.',
    variations: 'Añade berenjena asada, champiñones o espinacas para convertirla en un plato con más verduras. Unas cucharadas de ricotta entre capas aportan suavidad. Si la superficie se dora antes de que el centro esté caliente, cubre la fuente con papel de aluminio.',
    serving: 'Sírvela directamente de la fuente con albahaca recién cortada.',
  },
  'minestrone-con-pasta': {
    introduction: 'El minestrone es una sopa flexible de verduras, legumbres y pasta. No existe una única combinación obligatoria: la estación y lo que haya en la despensa pueden guiar la olla. Las alubias aportan consistencia y el caldo convierte las verduras en un plato completo y reconfortante.',
    technique: 'Corta las verduras en piezas pequeñas y sofríelas para construir sabor antes de añadir el caldo. Cocina primero las más firmes; incorpora la pasta cuando el resto esté casi tierno. Si la sopa va a guardarse, cuece la pasta aparte para que no absorba todo el líquido.',
    variations: 'Calabaza, judías verdes, col o patata pueden entrar según la temporada. Para una versión vegana, usa caldo vegetal y omite el parmesano; una cucharada de pesto al servir añade aroma. Ajusta el caldo al final porque algunas verduras absorben más que otras.',
    serving: 'Sirve con parmesano rallado y un chorrito de buen aceite de oliva.',
  },
  'macarrones-con-chorizo': {
    introduction: 'El chorizo suelta grasa y pimentón al dorarse, formando una base sabrosa para el tomate. Por eso no hace falta añadir mucho aceite al principio. Es una receta de despensa fácil de ajustar: la cantidad de chorizo determina tanto la intensidad como la sal del plato.',
    technique: 'Dora el chorizo a fuego medio y retira parte de la grasa si ha soltado demasiada. Cocina la cebolla en la misma sartén antes de añadir el tomate; absorberá el pimentón tostado. Prueba la salsa antes de salar y deja que reduzca para que se pegue a los macarrones.',
    variations: 'Un chorizo dulce da un resultado suave; el picante aporta más fuerza. Añade pimiento asado o guisantes si quieres incluir verduras. Para un acabado gratinado, mezcla la pasta con la salsa, cúbrela con queso y hornéala unos minutos.',
    serving: 'Acompaña con una ensalada fresca que contraste con el chorizo.',
  },
  'pasta-con-espinacas-y-ricotta': {
    introduction: 'La ricotta y las espinacas forman un relleno clásico en Italia y también una salsa sencilla para pasta. La ricotta es suave, de modo que conviene sazonarla bien y aportar pimienta o nuez moscada. Las espinacas reducen mucho de volumen, así que una buena cantidad fresca se convierte en una porción pequeña.',
    technique: 'Saltea las espinacas solo hasta que se marchiten y escurre el líquido si lo sueltan. Bate la ricotta con agua caliente de cocción para hacerla más cremosa antes de añadir la pasta. Mezcla con suavidad para mantener las hojas enteras y evitar que el queso se separe.',
    variations: 'Puedes reemplazar las espinacas por acelgas tiernas, retirando los tallos más duros. Unas nueces tostadas añaden textura y el limón aligera la ricotta. Si utilizas espinacas congeladas, descongélalas y escúrrelas a conciencia antes de saltearlas.',
    serving: 'Termina con parmesano y nuez moscada recién rallada.',
  },
  'carbonara-vegetariana-de-calabacin': {
    introduction: 'Esta variación toma la idea de una carbonara —pasta, huevo, queso y pimienta— y reemplaza la carne por calabacín dorado. No es la receta romana tradicional, sino una alternativa vegetariana para quienes buscan una salsa cremosa con ingredientes cotidianos.',
    technique: 'Corta el calabacín en dados pequeños y dora los lados antes de incorporar la pasta. Prepara la mezcla de huevo y queso con antelación. Apaga el fuego, espera unos segundos y remueve con la pasta caliente; la temperatura residual cuaja la salsa sin convertirla en revuelto.',
    variations: 'Unas setas doradas pueden acompañar o sustituir parte del calabacín. Usa pecorino para más intensidad o parmesano para un sabor más suave. Si quieres una versión sin huevo, mezcla queso crema con agua de cocción, sabiendo que la textura será distinta.',
    serving: 'Sirve con pimienta recién molida y una ensalada de hojas verdes.',
  },
  'linguine-alle-vongole': {
    introduction: 'Las almejas liberan un jugo salino que se convierte en parte de la salsa de los linguine. Antes de empezar, comprueba que estén limpias y frescas, y desecha las que tengan la concha rota o permanezcan abiertas al tocarlas. El ajo y el perejil completan un plato de sabor marino.',
    technique: 'No añadas sal extra a la sartén hasta probar el jugo de las almejas. Tápalas mientras se abren y retíralas en cuanto lo hagan; las que no se abran tras cocinarse deben descartarse. Cuela el líquido si tiene restos de arena y mézclalo con la pasta y su agua.',
    variations: 'El vino blanco aporta acidez, pero puedes usar un poco de caldo si prefieres evitarlo. Añade guindilla para un punto picante o limón para un acabado más fresco. Si compras almejas depuradas, sigue igualmente las indicaciones del pescadero para conservarlas y limpiarlas.',
    serving: 'Lleva a la mesa con perejil picado y pan para aprovechar el jugo.',
  },
  'bolonesa-de-lentejas': {
    introduction: 'Las lentejas cocidas dan cuerpo a una salsa de tomate que puede servirse con pasta o usarse en una lasaña vegetal. La base de zanahoria, apio y cebolla aporta dulzor y profundidad. Es una receta práctica para aprovechar legumbres ya cocidas y preparar varias raciones de una sola vez.',
    technique: 'Pica las verduras pequeñas para que se integren con las lentejas. Cocina el tomate hasta que pierda su acidez antes de incorporar las legumbres; si se añaden demasiado pronto, pueden deshacerse. Aplasta una parte con la cuchara para espesar la salsa sin necesidad de triturarla.',
    variations: 'Las lentejas verdes mantienen mejor su forma; las pardinas suelen quedar más suaves. Añade champiñones picados para un sabor más terroso o una pizca de pimentón para intensificar el tomate. La salsa se puede congelar en porciones y descongelar en la nevera.',
    serving: 'Prueba con espaguetis, tagliatelle o polenta si quieres cambiar de base.',
  },
  'pasta-con-tomates-cherry-y-feta': {
    introduction: 'Al asarse, los tomates cherry se ablandan y concentran sus jugos; el feta aporta una nota salada que se mezcla con ellos y crea una salsa casi sin esfuerzo. La receta se hizo popular por su sencillez, pero el resultado mejora si los tomates están maduros y el queso se reparte bien por la fuente.',
    technique: 'Coloca los tomates en una sola capa y no añadas demasiada sal al principio: el feta ya es salado. Hornea hasta que varios tomates se hayan abierto y suelten jugo. Aplasta el queso con parte de los tomates, añade la pasta caliente y ajusta la consistencia con agua de cocción.',
    variations: 'Prueba con tomates de distintos colores o añade aceitunas y orégano antes de hornear. El feta puede reemplazarse por queso de cabra firme, aunque el sabor será diferente. Un puñado de espinacas se marchita al mezclar la pasta caliente.',
    serving: 'Termina con albahaca fresca y sirve antes de que el queso se enfríe.',
  },
  'pasta-con-crema-de-calabaza': {
    introduction: 'La calabaza asada se transforma en una salsa espesa, naturalmente dulce y fácil de ligar con pasta. Asarla en vez de hervirla ayuda a concentrar su sabor y evita añadir agua de más. La salvia y el parmesano aportan contraste, pero pueden ajustarse a lo que tengas en casa.',
    technique: 'Corta la calabaza en piezas similares para que se ase de manera uniforme y retírala cuando esté tierna en el centro. Tritura con caldo poco a poco: siempre se puede añadir más, pero una crema demasiado líquida cuesta reducirla. Mezcla con la pasta en la sartén para que se adhiera.',
    variations: 'La calabaza se puede reemplazar por boniato, aunque el resultado será más dulce. Añade nuez moscada o guindilla para cambiar el perfil. Si no tienes salvia, unas hojas de tomillo funcionan; saltéalas en aceite para que suelten aroma antes de servir.',
    serving: 'Unas semillas de calabaza tostadas añaden un contraste crujiente.',
  },
  'ensalada-de-pasta-mediterranea': {
    introduction: 'Una ensalada de pasta es ideal para preparar con antelación, siempre que la pasta se enfríe y el aliño se reparta bien. Tomates, pepino, aceitunas y feta ofrecen sabores frescos y salinos. Para que no quede seca después de reposar, guarda un poco de aliño para añadirlo justo antes de servir.',
    technique: 'Cuece la pasta al dente: al enfriarse conserva más firmeza que una pasta sobrecocida. Escúrrela y enfríala rápidamente, luego sécala un poco para que el aliño no se diluya. Añade el pepino y el feta cuando esté fría y mezcla con cuidado.',
    variations: 'Garbanzos, pimiento asado o alcachofas en conserva convierten la ensalada en una comida más completa. Puedes cambiar el feta por mozzarella o prescindir del queso. Si la preparas para llevar, transporta el aliño aparte y mézclalo al final.',
    serving: 'Se conserva refrigerada y está rica fría o a temperatura ambiente.',
  },
  'pasta-gratinada-con-bechamel': {
    introduction: 'La bechamel casera necesita una base de mantequilla y harina bien cocinada antes de añadir la leche. Así se espesa sin dejar sabor a harina cruda. Al mezclarla con macarrones y gratinar, la salsa debe quedar algo más fluida de lo que parece necesario: el horno la espesará.',
    technique: 'Añade la leche poco a poco mientras bates para evitar grumos, y cocina la salsa unos minutos tras el primer hervor suave. Cuece la pasta un poco menos de lo habitual y escurre bien antes de mezclar. Si la bechamel se espesa demasiado, corrígela con leche tibia.',
    variations: 'Una pizca de nuez moscada y pimienta blanca combina bien con la bechamel. Puedes incorporar coliflor cocida, jamón o champiñones, procurando que no estén húmedos. Para gratinar, mezcla quesos que fundan con una pequeña cantidad de parmesano para dar sabor.',
    serving: 'Deja que repose unos minutos y sirve con verduras o ensalada.',
  },
  'orecchiette-con-brocoli-y-ajo': {
    introduction: 'Las orecchiette tienen forma de pequeñas orejas y retienen trocitos de brócoli en su superficie. En el sur de Italia se preparan a menudo con grelos; esta versión usa brócoli, más fácil de encontrar. Cocer pasta y verdura en la misma olla ahorra tiempo y ayuda a unir los sabores.',
    technique: 'Corta el brócoli en ramilletes pequeños para que se cuezan junto con la pasta sin quedar duros. Si las orecchiette necesitan más tiempo, añade el brócoli cuando falten unos minutos. Reserva agua y aplasta algunos ramilletes en la sartén para formar una salsa ligera.',
    variations: 'Una pizca de guindilla da un toque picante y el limón añade frescor. Puedes añadir garbanzos o alubias blancas para hacer el plato más contundente. Si usas grelos, escáldalos primero y ajusta el punto amargo con un poco más de aceite.',
    serving: 'Termina con parmesano o pecorino y un hilo de aceite de oliva.',
  },
  'pasta-con-salsa-rosa-de-tomate': {
    introduction: 'La salsa rosa de tomate combina la acidez de una salsa roja con la suavidad de la nata. Se hace rápido y es una buena opción para quienes prefieren un sabor menos intenso que el tomate solo. Reducir primero el tomate evita que la nata tenga que cocinarse demasiado.',
    technique: 'Sofríe la chalota hasta que esté tierna y deja reducir el tomate antes de incorporar la nata. Añádela con el fuego bajo y mezcla sin dejar que hierva con fuerza. Un poco de agua de cocción devuelve fluidez si la salsa se espesa mientras termina la pasta.',
    variations: 'Puedes cambiar la nata por queso mascarpone o una alternativa vegetal para cocinar, ajustando la textura. Para una versión con más verduras, añade espinacas o guisantes. Una pizca de pimentón o guindilla modifica el sabor sin añadir muchos ingredientes.',
    serving: 'Albahaca fresca y parmesano equilibran la suavidad de la salsa.',
  },
  'pasta-al-pesto-rosso': {
    introduction: 'El pesto rosso parte de tomates secos y frutos secos, en lugar de albahaca como ingrediente principal. Los tomates conservados en aceite ya aportan grasa y sal, así que conviene añadir el aceite y el queso poco a poco. El resultado es intenso y basta una cantidad pequeña para cubrir la pasta.',
    technique: 'Tritura los ingredientes en pulsos cortos para conservar algo de textura. Si el pesto queda muy espeso, aligéralo con agua de cocción al mezclarlo con la pasta. No hace falta cocinar la salsa: el calor residual de la pasta libera el aroma sin resecar los tomates.',
    variations: 'Almendras, nueces o piñones pueden usarse según la despensa. Añade más albahaca para un sabor verde o un poco de limón para reducir la sensación salada. Si los tomates están secos sin aceite, hidrátalos primero en agua caliente y escúrrelos.',
    serving: 'Guarda el pesto sobrante refrigerado en un recipiente bien cerrado.',
  },
};
