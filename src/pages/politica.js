// project import
import { Typography, Box, Button } from '@mui/material';
//import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| CLIMA PAGE ||============================== //

const Politica = () => (
  <>
    <AuthBackground />
    <Box
      sx={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: 5,
        textAlign: 'justify'
      }}
    >
      <Typography>
        <h1>Política de Privacidad</h1>
        El departamento “Observatorio Estadístico de Banano” (OEB) de la Asociación de Exportadores de Banano del Ecuador AEBE (la
        Asociación, Asociación, AEBE, nosotros) ofrece servicios entre los cuales se incluye:
        <p> &emsp;● Aplicación web de visualización de información estadística del sector de banano del Ecuador. </p>
        <p> &emsp;● Aplicación móvil de registro de información de producción y clima</p> El objetivo de esta Política de Privacidad es
        informar a los usuarios (de aplicación web y aplicación móvil) sobre los datos que la Asociación de Exportadores de Banano del
        Ecuador AEBE a través del OEB recoge, las razones por las cuales recoge dichos datos y las formas a través de las cuales los
        usuarios pueden actualizarlos, gestionarlos, exportarlos y eliminarlos, entre otros.
        <h3>INFORMACIÓN QUE RECOGE LA ASOCIACIÓN DE EXPORTADORES DE BANANO DEL ECUADOR:</h3>
        <p>
          La Asociación de Exportadores de Banano del Ecuador AEBE recoge información de sus usuarios para prestar los servicios. El tipo de
          información que la Asociación de Exportadores de Banano del Ecuador AEBE recoge de los usuarios depende del uso que se realice de
          sus servicios. Al hacer uso de los servicios ofrecidos por la Asociación de Exportadores de Banano del Ecuador AEBE y proporcionar
          datos personales, el usuario acepta que la Asociación de Exportadores de Banano del Ecuador AEBE utilice dicha información de
          acuerdo con los términos de esta política de privacidad. Al proporcionar datos personales, el usuario reconoce y acepta que los
          datos pueden transferirse hacia los servidores de la Asociación de Exportadores de Banano del Ecuador AEBE y/o a terceros
          autorizados.
        </p>
        <h3>INFORMACIÓN QUE NOS PROPORCIONAS</h3>
        <p>Al crear una cuenta en la página web https://observatoriobanano.com nos proporcionas los siguientes datos personales:</p>
        <p>&emsp;● Correo electrónico</p>
        <p>&emsp;● Usuario</p>
        <p>&emsp;● Contraseña</p>
        <p>&emsp;● Otros</p>
        <p>
          Al indicar a la Asociación de Exportadores de Banano del Ecuador AEBE su intención de participar en la aplicación móvil de
          registro de información de producción y clima, una cuenta será creada para el usuario por parte de un funcionario de la Asociación
          de Exportadores de Banano del Ecuador AEBE. Para crear una cuenta para los usuarios de la aplicación móvil, deberá compartir la
          siguiente información a través de una llamada telefónica o de manera presencial por medio del llenado de formulario físico cuando
          la Asociación de Exportadores de Banano del Ecuador AEBE realice visitas a sitio para la suscripción al programa de cooperación.
          En todo caso, los siguientes datos deberán ser proporcionados por parte del usuario:
        </p>
        <p>&emsp;● Dirección de correo electrónico</p>
        <p>&emsp;● Nombre de usuario</p>
        <p>&emsp;● Contraseña</p>
        <p>&emsp;● Ubicación geográfica - georeferenciada</p>
        <p>&emsp;● Cantón de residencia</p>
        <p>&emsp;● Provincia de residencia </p>
        <p>&emsp;● Edad</p>
        <p>&emsp;● Nivel de instrucción</p>
        <p>&emsp;● Estado civil</p>
        <p>&emsp;● Número de hijos, si los tuviere</p>
        <p>&emsp;● Número de fincas bajo su propiedad total o compartida</p>
        <p>&emsp;● Ubicación de la(s) finca(s) – (cantón, provincia)</p>
        <p>&emsp;● Nombre de la(s) finca(s)</p>
        <p>&emsp;● Hectáreas dedicadas al cultivo de banano en cada finca.</p>
        <p>&emsp;● Forma a través de la cual obtuvo la finca: Herencia, Inversión personal.</p>
        <p>&emsp;● Tipo de propiedad sobre la finca: Total o compartida</p>
        <p>&emsp;● Años de experiencia cultivando de banano</p>
        <p>&emsp;● Tipo de banano cultivado: Convencional, orgánico, ambos.</p>
        <p>&emsp;● Variedad del banano cultivado.</p>
        <p>&emsp;● Indicar si el cultivo cuenta con la certificación FairTrade</p>
        <p>&emsp;● Certificaciones de producción.</p>
        <p>
          &emsp;● Indicar si es miembro de una asociación: Nombre de la asociación en caso de pertenecer a una y tiempo que pertenece a la
          asociación
        </p>
        <h3>INFORMACIÓN DE ACTIVIDAD</h3>
        <p>
          Al utilizar la aplicación móvil de registro de información de producción y clima, los usuarios proporcionarán la siguiente
          información a la Asociación de Exportadores de Banano del Ecuador AEBE.{' '}
        </p>
        <p>&emsp;● Semana ISO por registrar</p>
        <p>&emsp;● Año</p>
        <p>
          &emsp;● Datos de producción: enfundes por hectárea, cajas totales producidas, hojas a la cosecha, número de racimos cortados, peso
          promedio del racimo, merma/rechazo
        </p>
        <p>
          &emsp;● Prácticas Agrícolas - ciclos de fumigación: costo total del producto, costo total de la aplicación, productos
          aplicados(control sigatoka, Bio-estimulante, abonos foliares, insecticida orgánico, aceite agrícola)
        </p>
        <p>
          &emsp;● Prácticas Agrícolas - Ciclo de fertilización: costo total del producto, costo total de la aplicación, productos
          aplicados(Edáficos, foliares, coadyuvantes)
        </p>
        <p>
          &emsp;● Prácticas Agrícolas – labores semanales: selectó, limpieza de matas, desvío de hijos, control de malezas, apuntalamiento,
          resiembra, cosecha, limpieza de drenaje, destalle, deshije, deshoje.{' '}
        </p>
        <p>&emsp;● Prácticas Agrícolas – Riego: días de riego: Lunes a domingo, horario de riego, módulos activados</p>
        <p>&emsp;● Previsiones climáticas</p>
        <p>
          De manera general aplicable a todos los datos proporcionados, los datos personales, es decir aquellos que identifican o hacen
          identificable a una persona natural, directa o indirectamente estarán a lo dispuesto la Ley s/n (Quinto Suplemento del Registro
          Oficial 459, 26-V-2021). Los datos que no cumplieren con dicha condición únicamente se sujetarán a los términos de la presente
          política de privacidad. Los datos proporcionados por los usuarios se tendrán por verdaderos y exactos. La Asociación de
          Exportadores de Banano del Ecuador AEBE actúa considerando la buena fe de los usuarios al proporcionar los datos. La Asociación de
          Exportadores de Banano del Ecuador AEBE no será responsable por la veracidad o exactitud de los datos proporcionados por los
          usuarios. Los usuarios tendrán derecho a subsanar los errores o inexactitudes que hubieren sido parte de los datos al
          proporcionarlos, siendo responsables ellos por los errores o inexactitudes de los datos que hubieren proporcionado. La falta de
          veracidad o inexactitud en los datos proporcionados por los usuarios justifica en todo caso la terminación de los servicios
          ofertados por la Asociación de Exportadores de Banano del Ecuador AEBE de acuerdo con los términos y condiciones que regulan dicha
          relación. En todo caso que por orden de autoridad competente la Asociación debiere presentar dichos datos, serán los usuarios
          responsables por los efectos de la inexactitud y/o falsedad en los datos proporcionados incluyendo los efectos a terceros que
          dicha falsedad o inexactitud pudiere generar.
        </p>
        <h3>USO DE DATOS PERSONALES Y OTRA INFORMACIÓN</h3>
        <p>
          La Asociación de Exportadores de Banano del Ecuador AEBE utiliza los datos personales que usted proporciona a través de su canal
          digital del Observatorio Estadístico de Banano de acuerdo con el contenido de esta política de privacidad. Los datos
          proporcionados por los usuarios son almacenados en bases de datos o ficheros que podrán encontrarse en servidores de la Asociación
          de Exportadores de Banano del Ecuador AEBE o de terceros, incluyendo los servidores en nube. Los datos proporcionados por los
          usuarios serán conservados durante el tiempo en el cual el usuario posea una cuenta activa en la aplicación web o en la aplicación
          móvil de la Asociación de Exportadores de Banano el Ecuador AEBE. Los datos serán eliminados de manera automática transcurridos
          180 días luego de que el usuario cancele su cuenta. Los datos que generan la línea base se revisarán de manera periódica cada 5
          años. La Asociación podrá hacer uso de la conservación ampliada de tratamiento de datos con fines de fines de investigación
          científica, histórica o estadística, siempre y cuando se establezcan las garantías de seguridad y protección de datos de acuerdo
          con las regulaciones vigentes. La Asociación podrá realizar distintos tipos de tratamiento de los datos personales del usuario,
          pudiendo incluir, pero sin limitarse a, recopilar, registrar, organizar, estructurar, almacenar, modificar, procesar, comunicar,
          consultar, usar, combinar, suprimir y destruir datos. Los datos personales son utilizados de manera exclusiva con los siguientes
          objetivos:{' '}
        </p>
        <h3>PRESTAR LOS SERVICIOS</h3>
        <p>
          Para crear una cuenta en la aplicación web, los usuarios deben proporcionar un nombre de usuario, correo electrónico y contraseña
          mediante el formulario de registro. Para crear una cuenta en la aplicación móvil de registro, los usuarios deben proporcionar un
          nombre de usuario, correo electrónico y contraseña. Estos datos son utilizados con la finalidad de crear cuentas que permitan a
          los usuarios acceder a los servicios brindados por la Asociación de Exportadores de Banano del Ecuador AEBE. La información de
          actividad que brindan los usuarios de la aplicación móvil de registro también es utilizada por la Asociación de Exportadores de
          Banano del Ecuador AEBE para ser tratada y ser presentada de manera agregada, mediante generalización que no permite la
          individualización de la información presentada, en la plataforma la aplicación web. CARACTERIZACIÓN Los datos proporcionados por
          los usuarios en el formulario de registro tienen como fin la segmentación por zonas productivas de la información de actividad
          proporcionada en la aplicación móvil.
        </p>
        <h3>PRESENTACIÓN DE LA INFORMACIÓN</h3>
        <p>
          Los datos proporcionados por los usuarios serán procesados y presentados respetando el derecho a la privacidad de su identidad,
          para ello los datos se anonimizan previo a su procesamiento y publicación. Así también, los resultados que sean de difusión masiva
          se harán bajo un protocolo de datos agregados. Las acciones descritas previamente están dirigidas a impedir la identificación o
          reidentificación de una persona natural, sin esfuerzos desproporcionados.
        </p>
        <h3>MANTENER Y MEJORAR LOS SERVICIOS</h3>
        <p>
          Los datos proporcionados por los usuarios podrán ser analizados, así como la actividad de los usuarios para realizar
          investigaciones, mejoras técnicas; implementar mejoras a los servicios ofrecidos por la Asociación de Exportadores de Banano del
          Ecuador AEBE, así como para mejorar el contenido y la funcionalidad de los servicios y para comprender mejor a los usuarios.
        </p>
        <h3>DESARROLLAR NUEVOS SERVICIOS</h3>
        <p>
          Los datos proporcionados por los usuarios podrán ser utilizados para desarrollar nuevos servicios o módulos para los servicios
          presentes.
        </p>
        <h3>OFRECER SERVICIOS PERSONALIZADOS</h3>
        <p>
          Los datos proporcionados por los usuarios podrán ser utilizados para ofrecerles servicios personalizados. FINES DE INVESTIGACIÓN Y
          ESTADÍSTICOS Los datos proporcionados por los usuarios serán empleados en diferentes estudios que tienen como propósito indagar en
          la predicción de producción potencial de banano del Ecuador, así como estudios determinísticos que establezcan una relación clara
          entre los indicadores de microclima y de productividad, la sostenibilidad de producción y otros tipos de relaciones inferenciales
          entre la información de producción, clima y previsiones climáticas.
        </p>
        <h3>COMUNICARNOS</h3>
        <p>
          La información de contacto que proporcionen los usuarios (número telefónico, correo electrónico y/o cualquier otra que permitiere
          contactarlos) podrán ser utilizadas por la Asociación de Exportadores de Banano del Ecuador AEBE para enviar mensajes como
          notificaciones, alertas, confirmaciones, etc. La Asociación de Exportadores de Banano del Ecuador AEBE puede utilizar esta
          información para comunicarse con los usuarios en el futuro para realizar encuestas respecto de los servicios ofertados o de otros
          temas relacionados con la industria. La Asociación de Exportadores de Banano del Ecuador AEBE puede utilizar esta información para
          comunicarse con los usuarios en el futuro para informarle sobre servicios que podrían ser de su interés. Los usuarios podrán optar
          por no recibir comunicaciones futuras en cualquier momento solicitando expresamente que su nombre sea eliminado de la lista de
          contactos a la siguiente dirección de correo electrónico: datos@aebe.com.ec
        </p>
        <h3>ELECCIÓN DE LA INFORMACIÓN QUE SE RECOGE:</h3>
        <p>
          Para hacer uso de los servicios ofrecidos por la Asociación de Exportadores de Banano del Ecuador AEBE se estará a lo previsto en
          los términos y condiciones, contratos y/o convenios que se suscriban entre los usuarios y la Asociación. Sin embargo, en todo
          caso, la no entrega de datos a la Asociación de Exportadores de Banano del Ecuador AEBE impedirá el uso de las funcionalidades que
          ofrece la aplicación web o la aplicación móvil.
        </p>
        <h3>ACCEDER, EXPORTAR, RETIRAR Y ELIMINAR LA INFORMACIÓN </h3>
        <h4>ACCEDER A LA INFORMACIÓN</h4>
        <p>
          El titular usuario podrá solicitar en cualquier momento enviando un correo electrónico a la dirección: datos@aebe.com.ec, con la
          finalidad de conocer y/o obtener acceso a todos sus datos personales, sin necesidad de presentar justificación alguna. La
          Asociación atenderá esta solicitud dentro del plazo de quince (15) días.
        </p>
        <h3>EXPORTAR LA INFORMACIÓN</h3>
        <p>
          El usuario podrá solicitar sus datos personales en un formato compatible, actualizado, estructurado, común, interoperable y de
          lectura mecánica, preservando sus características; o a transmitirlos a otros responsables. Este derecho se regulará de acuerdo con
          la normativa que dicte la Autoridad de Protección de Datos Personales. El usuario podrá solicitar que se transfieran o comuniquen
          sus datos personales, en los casos en los que el tratamiento se efectúe por medios automatizados, a otro responsable del
          tratamiento en cuanto fuera técnicamente posible. Luego de completada la transferencia de datos, se procederá a su eliminación,
          salvo que el usuario disponga su conservación. El responsable que ha recibido la información asumirá las responsabilidades
          contempladas en la Ley. Si la transferencia o comunicación no es técnicamente posible, los datos deberán ser transmitidos
          directamente al usuario. Si se trate de un volumen relevante de datos personales, según los parámetros definidos en el reglamento
          de la presente ley; o, Que el tratamiento sea necesario para el cumplimiento de obligaciones y el ejercicio de derechos del
          responsable o encargado del tratamiento de datos personales, o del titular en el ámbito del derecho laboral y seguridad social. La
          transferencia o comunicación será económica y financieramente eficiente, expedita y sin trabas. No procederá este derecho cuando
          se trate de información inferida, derivada, creada, generada u obtenida a partir del análisis o tratamiento efectuado por el
          responsable del tratamiento de datos personales con base en los datos personales proporcionados por el usuario, como es el caso de
          los datos personales que hubieren sido sometidos a un proceso de personalización, recomendación, categorización o creación de
          perfiles.
        </p>
        <h3>RECTIFICACIÓN Y/O ACTUALIZACIÓN LA INFORMACIÓN</h3>
        <p>
          El usuario podrá solicitar en cualquier momento la rectificación y actualización de sus datos inexactos o incompletos. Para tal
          efecto, el usuario deberá presentar los justificativos del caso, cuando sea pertinente. La Asociación de Exportadores de Banano
          del Ecuador AEBE atenderá el requerimiento en un plazo de quince (15) días y en este mismo plazo, deberá informar al destinatario
          de los datos, de ser el caso, sobre la rectificación, a fin de que lo actualice. Para solicitar la rectificación y/o actualización
          de datos, los usuarios deberán enviar la solicitud a la dirección de correo electrónico: datos@aebe.com.ec
        </p>
        <h3>ELIMINAR LA INFORMACIÓN</h3>
        <p>
          El usuario tiene derecho a que la Asociación de Exportadores de Banano del Ecuador AEBE suprima sus datos personales, cuando: 1)
          El tratamiento no cumpla con los principios establecidos en la ley; 2) El tratamiento no sea necesario o pertinente para el
          cumplimiento de la finalidad; 3) Los datos personales hayan cumplido con la finalidad para la cual fueron recogidos o tratados; 4)
          Haya vencido el plazo de conservación de los datos personales; 5) El tratamiento afecte derechos fundamentales o libertades
          individuales; 6) Revoque el consentimiento prestado o señale no haberlo otorgado para uno o varios fines específicos, sin
          necesidad de que medie justificación alguna; o, 7) Exista obligación legal. La Asociación de Exportadores de Banano del Ecuador
          AEBE eliminará, hará ilegible, o dejará irreconocibles de forma definitiva y segura los datos personales, dentro de los quince
          (15) días de recibida la solicitud por parte del usuario.
        </p>
        <h3>EXCEPCIONES</h3>
        <p>
          Se exceptúan los derechos de rectificación, actualización, eliminación,oposición, anulación y portabilidad en los siguientes
          casos; 1) Si el solicitante no es el titular de los datos personales o su representante legal no se encuentre debidamente
          acreditado; 2) Cuando los datos son necesarios para el cumplimiento de una obligación legal o contractual; 3) Cuando los datos son
          necesarios para el cumplimiento de una orden judicial, resolución o mandato motivado de autoridad pública competente; 4) Cuando
          los datos son necesarios para la formulación, ejercicio o defensa de reclamos o recursos; 5) Cuando se pueda causar perjuicios a
          derechos o afectación a intereses legítimos de terceros y ello sea acreditado por el responsable de la base de datos al momento de
          dar respuesta al titular a su solicitud de ejercicio del derecho respectivo; 6) Cuando se pueda obstaculizar actuaciones
          judiciales o administrativas en curso, debidamente notificadas; 7) Cuando los datos son necesarios para ejercer el derecho a la
          libertad de expresión y opinión; 8) Cuando los datos son necesarios para proteger el interés vital del interesado o de otra
          persona natural; 9) En los casos en los que medie el interés público, sujeto al cumplimiento de los estándares internacionales de
          derechos humanos aplicables a la materia, al cumplimiento de los principios de esta ley y a los criterios de legalidad,
          proporcionalidad y necesidad; 10) En el tratamiento de datos personales que sean necesarios para el archivo de información que
          constituya patrimonio del Estado, investigación científica, histórica o estadística.
        </p>
        <h3>DIVULGACIÓN DE DATOS PERSONALES Y OTRA INFORMACIÓN</h3>
        <p>
          La Asociación de Exportadores de Banano del Ecuador AEBE puede divulgar sus datos personales y/u otra información si así lo
          requiere la ley o si cree de buena fe que dicha acción es necesaria para (i) cumplir con una obligación legal, orden judicial o
          ayudar a las agencias gubernamentales de aplicación, (ii) proteger y defender los derechos. o propiedad de la Asociación, los
          Proveedores de Recompensas o nuestros usuarios, (iii) actuar en circunstancias urgentes para proteger la seguridad personal de los
          usuarios de los Servicios o del público, (iv) proteger contra la responsabilidad legal; (v) proteger a los Proveedores de
          Recompensas de usos fraudulentos, abusivos o ilegales; o (vi) proteger la seguridad o integridad de los Servicios; (vii) Para
          proteger intereses vitales, del interesado o de otra persona natural, como su vida, salud o integridad. La Asociación de
          Exportadores de Banano del Ecuador AEBE no se dedica a la venta de la información y/o datos personales proporcionados por sus
          usuarios. Sin embargo, en ciertas circunstancias podrán ser compartidos sus datos personales con ciertos terceros sin previo aviso
          según los términos que siguen: Transferencias comerciales: Los datos personales pueden formar parte de los activos que la
          Asociación de Exportadores de Banano del Ecuador AEBE transfiriere a terceros al momento de vender y/o comprar negocios y/o líneas
          de negocios. Empresas relacionadas: También podemos compartir sus datos personales con empresas relacionadas para fines coherentes
          con esta Política de privacidad. Agentes, consultores y terceros relacionados: La Asociación de Exportadores de Banano del Ecuador
          AEBE contrata a terceras personas físicas o jurídicas para que realicen determinadas actividades relacionadas con los servicios
          prestados y/o demás actividades de la Asociación de Exportadores de Banano del Ecuador AEBE. Entre dichas funciones se incluye el
          mantenimiento de bases de datos, el envío de correos electrónicos y mensajes SMS, la oferta y el desarrollo de determinadas
          características de los Servicios y el mantenimiento y la seguridad. Al contratar a una tercera persona natural o jurídica para
          realizar una actividad o prestar un servicio a favor de la Asociación de Exportadores de Banano del Ecuador AEBE se les serán
          proporcionados los datos personales y la información necesaria para realizar dicha función específica, se entiende también para
          promocionar los productos y servicios que la Asociación de Exportadores de Banano del Ecuador AEBE oferta de manera directa o a
          través de terceros. Otros terceros: La Asociación de Exportadores de Banano del Ecuador AEBE podrá también disponer de dicha
          información y compartirla con terceros a través de acuerdos de cooperación en las cuales se incluya la transmisión de bases de
          datos. Los terceros quienes reciban dicha información se comprometen a hacer uso de la información para los fines señalados en el
          acuerdo, de acuerdo con la ley vigente y como mínimo con políticas como las establecidas en esta política de privacidad. En ningún
          caso se autorizará la entrega de información a otros por parte de los terceros a los que se refiere, salvo aquellos a quienes
          fuere necesario para la realización de los fines para los cuales se compartió la información, como a sus representantes y/o
          dependientes, etc., quienes deberán hacer uso de la información salvaguardando su confidencialidad e integridad. Se podrán
          transferir o comunicar datos personales a países, organizaciones y personas jurídicas en general que brinden niveles adecuados de
          protección, y que se ajusten a la obligación de cumplimiento y garantía de estándares reconocidos internacionalmente, siempre que
          se encuentren dentro de las finalidades de la información compartida.
        </p>
        <h3> EXCLUSIONES</h3>
        <p>
          Se excluye de los datos e información protegida bajo esta política toda aquella información y/o datos personales, accesibles al
          público y susceptibles de tratamiento, referentes al contacto de profesionales y los datos de comerciantes, representantes y
          socios y accionistas de personas jurídicas y servidores públicos, siempre y cuando se refieran al ejercicio de su profesión,
          oficio, giro de negocio, competencias, facultades, atribuciones o cargo y se trate de nombres y apellidos, funciones o puestos
          desempeñados, dirección postal o electrónica, y, número de teléfono profesional. ENLACES A OTROS SITIOS WEB Esta Política de
          privacidad se aplica sólo a los Servicios prestados por la Asociación de Exportadores de Banano del Ecuador AEBE en la página web
          https://observatoriobanano.com y la aplicación móvil. Los Servicios pueden contener enlaces a otros sitios web no operados ni
          controlados por la Asociación (los «Sitios de terceros»). Las políticas y procedimientos que describimos aquí no se aplican a los
          Sitios de terceros. Los enlaces de los Servicios no implican que la Asociación respalde o haya revisado los Sitios de terceros.
        </p>
        <h3> SEGURIDAD:</h3>
        <p>
          La Asociación de Exportadores de Banano del Ecuador adoptará las medidas de seguridad necesarias para garantizar la protección de
          la información del usuario, a fin de evitar su alteración, pérdida, tratamiento y/o acceso no autorizado, tomando en consideración
          la naturaleza de la información y los riesgos a los que se encuentran expuestos.{' '}
        </p>
        <h3>OTROS TÉRMINOS Y CONDICIONES:</h3>
        <p>
          1) El tratamiento de datos personales se encuentra regulado mediante la Ley s/n (Quinto Suplemento del Registro Oficial 459,
          26-V-2021) de la República del Ecuador. Lo relativo al uso de los servicios y otra información se encuentra regulado de acuerdo
          con los contratos, convenios y demás acuerdos particulares o grupales que se hubieren celebrado para el efecto. Los términos y
          condiciones contenidos en este documento se rigen y se interpretan de acuerdo con las leyes vigentes en la República del Ecuador.
        </p>
        <p>
          2) La persona responsable del cumplimiento de la presente política de privacidad y protección de datos es el director del
          Observatorio Estadístico de Banano, Econ. Paúl Vera. Contacto: datos@aebe.com.ec; 0979340988.
        </p>
        <p>
          {' '}
          3) El usuario podrá revocar el consentimiento sobre esta política de privacidad en cualquier momento mediante un correo
          electrónico al contacto señalado en el numeral precedente. La revocatoria del consentimiento surtirá efectos a partir de su
          recepción. El uso de los servicios se limitará de acuerdo con lo establecido en la cláusula correspondiente.
        </p>
        <p>
          4) Para realizar reclamos con base en esta política de privacidad respecto del tratamiento de los datos personales, podrá
          realizarlo mediante un correo electrónico enviado al punto de contacto señalado en el numeral 2 de la presente cláusula. La
          respuesta a los reclamos se realizará en 15 días hábiles. En caso de falta respuesta o negativa a su reclamo, el usuario podrá
          presentar el correspondiente reclamo administrativo ante la Autoridad de Protección de Datos Personales, para lo cual se deberá
          estar conforme al procedimiento establecido en el Código Orgánico Administrativo, la ley de protección de datos personales y demás
          normativa emitida por la Autoridad de Protección de Datos Personales.
        </p>
        <p>
          5) El usuario podrá solicitar la suspensión del tratamiento de los datos cuando se cumpla alguna de las condiciones siguientes:
        </p>
        <p>
          &emsp;1) Cuando el titular impugne la exactitud de los datos personales, mientras la Asociación verifica la exactitud de los
          mismos;{' '}
        </p>
        <p>
          &emsp;2) El tratamiento sea ilícito y el interesado se oponga a la supresión de los datos personales y solicite en su lugar la
          limitación de su uso;
        </p>
        <p>
          &emsp;3) La Asociación ya no necesite los datos personales para los fines del tratamiento, pero el interesado los necesite para la
          formulación, el ejercicio o la defensa de reclamaciones; y.
        </p>
        <p>
          &emsp;4) Cuando el interesado se haya opuesto al tratamiento en virtud del artículo 31 de la Ley que regula la materia; mientras
          se verifica si los motivos legítimos del responsable prevalecen sobre los del interesado.
        </p>
        <p>
          &emsp;6) La Asociación de Exportadores de Banano del Ecuador se reserva expresamente el derecho a modificar, actualizar o
          completar en cualquier momento este documento. Toda modificación, actualización o ampliación será inmediatamente comunicada a
          través de los canales de acceso de los usuarios. Los cambios en la presente política de privacidad se realizarán en cualquier
          momento por parte de la Asociación y serán notificados mediante el mismo medio por el cual fueron aceptados los presentes
          términos. La no aceptación de dichos cambios, una vez que se encuentren vigentes será considerada una revocatoria de la política
          de acuerdo con los efectos señalados para dicho caso.
        </p>
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 5 }}>
      <Button variant="contained" color="primary" onClick={() => (window.location = '/')}>
        Ir a Inicio
      </Button>
    </Box>
  </>
);

export default Politica;
