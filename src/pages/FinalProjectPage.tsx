import React from 'react';
import Figure from '../components/Figure';
import FigureGroup from '../components/FigureGroup';
import { Component } from '../components/HPC';
import FinalProject from '../components/Project/FinalProject';
import Section, { SubSection } from '../components/Section';
import SubFigure from '../components/SubFigure';

const PROJECT: Iproject = {
    id: 6,
    header: "Proyecto Final de Arquitectura de Computadores",
    title: "Sistema para Simulación en la Industria Energética y Ambiental mediante de Entornos Virtuales de Desarrollo Ejecutados en una Super computadora.",
    date: "11 de Octubre del 2021"
}


export const FinalProjectPage: React.FC = () => {
    return (
        <div className="lab" id="labSheet">
            <FinalProject
                data={PROJECT}
                tableOfContent={sections}
                biblio={bibliography}
            >
                <Section id="context" title="1. Contexto del Proyecto">
                    <p>Con  un  rol  de  consultores, una empresa mediana, tipo <i>Spin Off</i> universitaria, nos contrata para desarrollar  una  solución  tecnologica <i>in-situ</i> (en el lugar) que le permita desarrollar  aplicaciones  para  simulaciónn  en  la  industria  energética  y  medioambiental. Dichas aplicaciones son construidas utilizando diferentes lenguajes de programación, compiladores, ambientes de desarrollo y ejecución conocidos, dirigidos al <strong>sistema operativo Linux</strong>. Normalmente dichas aplicaciones se ejecutan en sistemas de Computación de Alto  Rendimiento  (HPC).  Asimismo,  se  espera  que  <strong>4 desarrolladores</strong>  utilicen  el  sistema  y  que  este  pueda  conectarse  a:  un servidor de la empresa mediante una red privada; internet mediante una red pública. Todo lo anterior con un presupuesto de 200.000 USD.</p>

                    <SubSection className="section__gate" title="Objetivo Principal" id="main-objectives">
                        <p>Modelar y proponer un sistema que supla con los requerimientos presentados por la empresa, alineado con el presupuesto propuesto, y que contemple posibles nuevas necesidades para el futuro y casos extremos de uso.</p>

                    </SubSection>
                    <SubSection className="section__gate" title="Objetivos Secundarios" id="side-objetives">
                        <p>Con el sistema que planteamos para el proyecto, se tienen los siguientes objetivos</p>
                        <ul>
                            <li>Estudiar el hardware y software que conforma una Supercomputadora</li>
                            <li>Prooner la distribución de recursos en la supercomputadora para proveer ambientes de entorno y ejecución</li>
                            <li>Integrar dos sistemas (nuestro sistema y el servidor de la empresa) para lograr transferencia de datos eficiente.</li>
                            <li>Conectar nuestro sistema a internet a través de una red pública</li>
                            <li>Utilizar un proveedor <i>Cloud</i> para aumentar la confiabilidad del sistema</li>
                        </ul>
                    </SubSection>

                </Section>

                <Section id="video" title="2. Recurso Visual del Proyecto">
                    <div className="embed-responsive embed-responsive-16by9 mb-4">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QN6vZLFRKYo" title="YouTube video player"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </Section>

                <Section id="proposal" title="3. Nuestra Propuesta">
                    <p>
                        Se plantea un sistema centralizado a través del cual los desarrolladores tendrán acceso a <i>Máquinas Virtuales</i> (VM) y ejecución de tareas en una supercomputadora (HPC). Dicho sistema almacena los datos generadores por los desarrolladores y la supercomputadora localmente, e intercambia datos con el servidor de la empresa donde almacena la información de las aplicaciones. Lo anterior lo consigue mediante un servidor especial (servidor NFS), el cual tiene como objetivo principal transferir datos entre dichos sistemas.
                    </p>

                    <SubSection id="arch" title="Arquitectura del Sistema">
                        <p>Todas las conexiones de los desarrolladores se gestionan a través de un servidor (o nodo) central, el cual tiene como dos tareas principales: </p>
                        <ul>
                            <li>Iniciar la sesión para los desarrolladores</li>
                            <li>Repartir la carga a los servidores de cómputo del Supercomputador</li>
                        </ul>
                        <p>En la <a href="#fig:arch" title="ver figura">Fig. 1</a> Se aprecia una descripción en alto nivel de la arquitectura del sistema. Se observa que el servidor central (<i>Cluster head node</i>) conecta a las máquinas virtuales (<i>Compute nodes</i>) con el desarrollador (<i>Client</i>). A su vez, los datos generados por dichas maquinas están disponibles para el servidor NFS, el cual se encarga de gestionar la transferencia de datos con el servidor de la compañia, que es en donde se almacenan todas las aplicaciones que desarrollan.</p>
                        <Figure
                            id="fig:arch"
                            title="Arquitectura  del  sistema  en  alto  nivel.  El  nodo  principal  del Clúster se  encarga  de  recibir  todas  las  peticiones  yredirigirlas o procesarlas seg ́un el caso"
                            img="https://i.imgur.com/ugCX3rO.png"
                            imgStyle={{ "height": "400px", "width": "auto" }}
                            figIndex="1"
                            src="https://b1391bd6-da3d-477d-8c01-38cdf774495a.filesusr.com/ugd/44046b_b73759b866b249a0b3a715bf5a18f668.pdf"

                        />
                        <p>La región denotada por lineas azules es la Supercomputadora (o clúster),  la cual está conectada a internet. Por otro lado, se resalta que el sistema tiene un diseño hibrido, es decir, utiliza hardware local y en la nube para cumplir su proposito. En este caso, está conectado con los servicios en la nube que ofrece <i>Oracle</i>.</p>
                    </SubSection>
                </Section>

                <Section id="components" title="4. Componentes de la Supercomputadora"
                >
                    <p>El principal componente del sistema es la supercomputadora, y esta se encuentra compuesta por:</p>
                    <ul>
                        <li>4 servidores físicos de cómputo</li>
                        <li>1 servidor central</li>
                        <li>1 servidor NFS</li>
                    </ul>

                    <SubSection id="components:specs" title="Especificaciones de los Componentes"
                    >
                        <h5 className="mt-4">Servidor central</h5>
                        <p>El requerimiento computacional de este servidor no será muy alto, ya que a pesar de que gestiona todas la comunicación con los servicios y servidores de la supercomputadora, este no será el que ejecute las tareas, sino que las redistruira. De acuerdo a lo anterior, los componentes que se escogieron son:</p>
                        <div className="grid__figures mt-2">
                            <Component
                                title="Esquelo del servidor"
                                desc="Rack Gabinete Servidor 24 Ru"
                                img="https://i.imgur.com/aw5Zg6D.png"
                                src="https://www.gigabyte.com/co/Enterprise/GPU-Server/G482-Z53-rev-100"
                                cant="1"
                            />
                            <Component
                                title="Placa Madre"
                                desc="X12STW-TF"
                                img="https://i.imgur.com/F8JINsF.png"
                                src="https://www.supermicro.com/en/products/motherboard/X12STW-TF"
                                cant="1"
                            />
                            <Component
                                title="Procesador"
                                desc="Intel® Xeon® E-2386G"
                                img="https://i.imgur.com/fgnlICG.png"
                                imgStyle={{ "padding": "10px 50px", "width": "300px" }}
                                src="https://www.intel.la/content/www/xl/es/products/sku/214806/intel-xeon-e2386g-processor-12m-cache-3-50-ghz/specifications.html"
                                cant="1"
                            />

                            <Component
                                title="Memoria RAM"
                                desc="32 GB (2 x 16 GB) DDR4-2666 MHz PC4-21300 ECC UDIMM"
                                img="https://i.imgur.com/UVMdkBw.png"
                                src="https://www.amazon.com/-/es/DDR4-2666-PC4-21300-memoria-servidor-estaci%C3%B3n/dp/B07WZWNXGQ"
                                cant="1"
                            />
                            <Component
                                title="Disco Duro Mecanico"
                                desc="Toshiba MG04SCA60EE 6TB SAS 12Gbs 7200RPM 128MB Cache"
                                img="https://i.imgur.com/a7YvWSE.png"
                                // imgStyle={{ "padding": "5px 10px" }}
                                src="https://www.amazon.com/-/es/Toshiba-MG04SCA60EE-12Gbs-7200RPM-Internal/dp/B01N4FJPPY/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=6+TB+Toshiba&qid=1633995300&sr=8-6"
                                cant="1"
                            />
                            <Component
                                title="Disco Duro Rápido"
                                desc="SAMSUNG 970 EVO Plus SSD 2TB - M.2 NVMe Unidad de estado sólido interna con tecnología V-NAND"
                                img="https://i.imgur.com/kn8Az8x.png"
                                imgStyle={{ "padding": "5px 10px", "padding-top": "30px", "width": "300px", "margin-left": "auto", "margin-right": "auto" }}
                                src="https://www.amazon.com/-/es/SAMSUNG-970-EVO-Plus-SSD/dp/B07MFZXR1B/ref=sr_1_3?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=M.2+drive+2+TB&qid=1633995711&sr=8-3"
                                cant="1"
                            />
                        </div>


                        <h5 className="mt-4">Servidor de cómputo</h5>
                        <p>Cómo se mencionó anteriormente, la supercomputadora está compuesta por 4 servidores de cómputo. Cada uno de ellos tienen el mismo hardware (componentes), los cuales se listan a continuación:</p>
                        <div className="grid__figures mt-2">
                            <Component
                                title="Esquelo del servidor"
                                desc=" HPC Server - 4U DP 8 x Gen4 GPUServer G482-Z53 de GigaByte"
                                img="https://i.imgur.com/UpcSdbG.png"
                                src="https://www.gigabyte.com/co/Enterprise/GPU-Server/G482-Z53-rev-100"
                                cant="1"
                            />
                            <Component
                                title="Procesador"
                                desc="AMD EPYC™ 7532 "
                                img="https://i.imgur.com/4y6JJtT.png"
                                src="https://www.amd.com/en/products/cpu/amd-epyc-7532"
                                cant="2"
                            />
                            <Component
                                title="Memoria RAM"
                                desc="64GB PC4-23400 2933MHzDDR4 ECC RDIMM"
                                img="https://i.imgur.com/MkQXh2v.png"
                                src="https://cottservers.com/server-components/64gb-pc4-23400-2933mhz-ddr4-ecc-rdimm/"
                                cant="32 modulos"
                            />
                            <Component
                                title="Tarjeta Gráfica"
                                desc="NVidia GeForce RTX 3080 Ti"
                                img="https://i.imgur.com/nzNaQnE.png"
                                imgStyle={{ "padding": "5px 10px" }}
                                src="https://shop.nvidia.com/en-us/geforce/store/?page=1&limit=9&locale=en-us&gpu=RTX%203080%20Ti"
                                cant="2"
                            />
                        </div>

                        <p>Cada componente se eligió meticulosamente para cumplir de la mejor manera los requerimientos de la empresa. Por un lado, el <strong>procesador</strong> se escogió con base en diversos <i>benchmarks</i> e informes que permitieron identificarlo como un procesador con buena relación calidad/precio.</p>

                        <p>
                            Los  benchmark  realizados  por  PassMark®  Software (<a href="#components:specs:passmark">Fig. 2</a>) lo  posicionan  como  uno  de  los  mejores  en rendimiento  dentro  de  los procesadores más populares en el mercado de servidores.
                        </p>

                        <FigureGroup
                            title="Review del procesador AMD EPYC™ 7532 por parte cpubenchmark de PassMark® Software"
                            figIndex="2"
                            id="components:specs:passmark"

                        >
                            <SubFigure
                                title="(a) CPU  Mark  del  top  10  de  los  procesadores  más  comunes  paraservidores"
                                img="https://i.imgur.com/SmaCCDw.png"
                                imgStyle={{ "height": "350px", "width": "450px" }}
                            />
                            <SubFigure
                                title="(b) Precio  y  rendimiento  de  algunos  de  los  procesadores más populares del mercado"
                                img="https://i.imgur.com/VgYUrYB.png"
                                imgStyle={{ "height": "400px", "width": "530px" }}
                            />
                        </FigureGroup>

                        <p>
                            Por otro lado, la memoría <strong>RAM</strong> seleccionada utiliza <a href="https://en.wikipedia.org/wiki/ECC_memory" title="más información">ECC</a> (<i>Error Correcting Code</i>), tecnología
                            que permite detectar errores y corregirlos sin perder datos. Adicionalmente, las memorías son de tipo <a href="https://en.wikipedia.org/wiki/Registered_memory" title="más información">RDIMM</a>, lo cual las hace más seguras y es posible tener un sistema con más capacidad de memoria pero con menor cantidad de módulos.
                        </p>

                        <p>
                            En lo que respecta a la elección de la <strong>tarjeta gráfica</strong>, en el mercado de Supercomputadores hay dos marcas que sobresalen, NVidia y AMD. Por un lado, NVidia cuenta con <a href="https://es.wikipedia.org/wiki/CUDA" title="más información">CUDA</a>, tecnología en la que a través de la programación  de interfaces, permite al software (programas, aplicaciones) utilizar los recursos de la tarjeta gráfica más eficientemente al realizar computación en paralelo. Por otro lado, AMD utiliza <a href="https://es.wikipedia.org/wiki/OpenGL" title="más información">OpenGL</a>, la cual es una plataforma de proposito general para desarrollar intefaces de todo tipo. Dichas tecnologías han sido comparadas en una diversidad de escenarios <a href="#refs:">[1]</a>, de los cuales se puede concluir que la elección de tarjetas NVidia nos ofrece la posibilidad de obtener el mejor rendimiento y utilizar las mejores tecnologías.
                        </p>

                        <h5>Servidor NFS</h5>
                        Este servidor está dedicado plenamente a conseguir transferencia de información eficiente entre nuestro sistema y el servidor de la compañia, por lo que su configuración de almacenamiento es relevante. Está compuesto por:

                        <div className="grid__figures mt-2">
                            <Component
                                title="Esquelo del servidor"
                                desc="Rack Gabinete Servidor 24 Ru"
                                img="https://i.imgur.com/aw5Zg6D.png"
                                src="https://www.gigabyte.com/co/Enterprise/GPU-Server/G482-Z53-rev-100"
                                cant="1"
                            />
                            <Component
                                title="Procesador"
                                desc="Intel® Xeon® E-2374G Processor"
                                img="https://i.imgur.com/Fz5iSqB.png"
                                src="https://www.intel.com/content/www/us/en/products/sku/212260/intel-xeon-e2374g-processor-8m-cache-3-70-ghz/specifications.html"
                                cant="1"
                            />
                            <Component
                                title="Memoria RAM"
                                desc="64GB PC4-23400 2933MHzDDR4 ECC RDIMM"
                                img="https://i.imgur.com/MkQXh2v.png"
                                src="https://cottservers.com/server-components/64gb-pc4-23400-2933mhz-ddr4-ecc-rdimm/"
                                cant="32 modulos"
                            />
                            <Component
                                title="Disco Duro mecánico"
                                desc="Toshiba Mg08aca16te 16tb 7200rpm"
                                img="https://i.imgur.com/j3gSF7k.png"
                                imgStyle={{ "width": "300px", "padding": "10px 40px", "margin-left": "auto", "margin-right": "auto" }}
                                src="https://articulo.mercadolibre.com.co/MCO-656157307-toshiba-mg08aca16te-16tb-7200rpm-512e-35-sata-enterprise-d-_JM?matt_tool=15557168&matt_word=&matt_source=google&matt_campaign_id=14634237758&matt_ad_group_id=122266241930&matt_match_type=&matt_network=g&matt_device=c&matt_creative=545507349257&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=235616508&matt_product_id=MCO656157307&matt_product_partition_id=1405252328105&matt_target_id=aud-345731277262:pla-1405252328105&gclid=Cj0KCQjwwY-LBhD6ARIsACvT72OZyxLCp4h7-fvX9GxzZZu7IwMk12oG0yTudv-bRMXCmu_wWFnruwAaAlW-EALw_wcB"
                                cant="1"
                            />
                            <Component
                                title="Disco Duro mecánico"
                                desc="Disco sólido SSD interno Samsung 980 PRO MZ-V8P1T0B 1TB"
                                img="https://i.imgur.com/sksZfAt.png"
                                src="https://www.mercadolibre.com.co/disco-solido-ssd-interno-samsung-980-pro-mz-v8p1t0b-1tb/p/MCO16995803?matt_tool=15557168&matt_word=&matt_source=google&matt_campaign_id=14634237758&matt_ad_group_id=122266241930&matt_match_type=&matt_network=g&matt_device=c&matt_creative=545507349257&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=436589724&matt_product_id=MCO16995803-product&matt_product_partition_id=1405252328105&matt_target_id=aud-345731277262:pla-1405252328105&gclid=Cj0KCQjwwY-LBhD6ARIsACvT72MZ8EW4gJt3rvItXVCUuVg_l-TpV81Fbs7JHMz_eEyusk_cy0sovDEaApyiEALw_wcB"
                                cant="1"
                            />
                            {/* https://i.imgur.com/sksZfAt.png */}
                        </div>

                    </SubSection>

                </Section>

                <Section id="technologies" title="5. Tecnologías">
                    <p>La gran mayoría de tecnologías utilizadas por la supercomputadora se basan en los servicios de <a href="https://www.redhat.com/en" title="ver página">Red Hat</a>, uno de los mayores proveedores de soluciones abiertas al público (o <i>open source</i>). Entre las tecnologías que ofrecen y el sistema utiliza se destacan:</p>
                    <ul>
                        <li>Red Hat Cluster Suite (Para gestionar la división de trabajo y recursos en la supercomputadora)</li>
                        <li>Red Hat Enterprise Linux o RHEL (sistema operativo)</li>
                        <li>Add-On High Availability (mejorar la confiabilidad y resilencia de la supercomputadora)</li>
                    </ul>
                    <SubSection id="OS" title="¿Qué sistema operativo tiene una supercomputadora?">
                        <p>El mercado de las supercomputadoras está dominado por <a href="https://es.wikipedia.org/wiki/N%C3%BAcleo_Linux" title="más información">Linux</a>, el cual es bien conocido por su capacidad de interoperar con todos los tipos de arquitecutras y redes, su mayor estabilidad y escalabilidad que otras plataformas, y en general debido a su rendimiento superior <a href="ref:2">[2]</a>. En vista de lo anterior, se emplea el sistema operativo <a href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">RHEL</a>, el cual está basado en Linux. Dicho sistema operativo está orientado a la seguridad, y brida una base consistente y estable para la implementación de sistema híbridos como el nuestro.</p>
                    </SubSection>
                    <SubSection id="virtual-servers" title="Servidores Virtuales ¿Cómo se crean?">
                        <p>
                            Como se comentó previamente, el sistema cuenta con 4 servidores de computo físicos, sin embargo, para aprovechar mejores los recursos de cada servidor y para que la ejecución de tareas en simultaneo (en paralelo) sea más eficiente, se requieren más servidores que se puedan redistribuir cargas más pequeñas. Por fortuna, es posible crear <strong>servidores virtuales</strong> a partir de servidores físicos.
                        </p>
                        <Figure
                            title="Creación de Máquinas Virtuales mediante virtualización"
                            id=""
                            figIndex="3"
                            img="https://i.imgur.com/UdhWEZo.png"
                            imgStyle={{ "height": "200px", "width": "auto" }}
                            src="https://www.cloud4y.ru/en/blog/how-virtualization-works/"
                        />
                        <p>
                            Para lograr esto, se sigue una lógica de división de recursos (capacidad de computo) para que cada servidor virtual cuente con la misma capacidad. A su vez, cada uno de estos servidores lo maneja un sistema de monitoreo conocido como <a href="https://www.vmware.com/topics/glossary/content/hypervisor" title="más información">Hypervisor</a>. Esto que se acaba de describir se conoce como <strong>virtualización</strong>, y se puede realizar con el software <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift" title="más información"><i>Red Hat Openshift</i></a>.
                        </p>
                    </SubSection>

                    <SubSection id="job-scheduler" title="¿Cómo es posible distribuir una tarea a lo largo de muchos servidores?">
                        <p>
                            El servidor principal es el encargado de redistribuir la carga de una tarea a los <i>servidores de computo</i> para que está se ejecute en paralelo más eficientemente. Sin embargo ¿cómo se sabe cuales son los recursos disponibles por cada nodo en el clúster? ¿cómo se divide la carga en cada uno de estos? La comunicación entre los servidores via <a href="https://en.wikipedia.org/wiki/Message_Passing_Interface" title="más información">MPI</a> (Inferaz de Paso de Mensajes), la cual permite iniciar trabajos que se ejecutan en todo el servidor con un solo comando <a href="#bib:3" title="ir a la referencia">[3]</a>. Nuestro sistema emplea la solución de esta interfaz que ofrece <i>Red Hat</i> y es denominada <a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/6.5_technical_notes/compat-openmpi">Open MPI</a>.
                        </p>

                    </SubSection>

                    <SubSection id="cloud-services" title="Acceso a Recursos Computacionales Extra">
                        <p>
                            Con  el  fin  de  aumentar  la  confiabilidad  del  sistema,  se  contemplan  casos  extremos  en  donde  la supercomputadora  no  pueda  suplir  lademanda  de  ejecución  como:  Los  4  desarrolladores  están  corriendo  simulaciones  con  alta  exigencia  computacional;  Algún componente  de la supercomputadora  falla  y  su  capacidad  de  computo  se  ve  afectada.  Por  lo  anterior  se  cuenta  con  acceso  a  <a href="https://www.oracle.com/co/cloud/" title="más información">recursos computaciones Cloud de Oracle</a>, más concretamente a:
                        </p>
                        <ul>
                            <li>Oracle Cloud Infraestructure - Compute, VM</li>
                            <li>Oracle Cloud Infraestructure - Recursos informáticos, GPU</li>
                        </ul>

                    </SubSection>
                </Section>

                <Section id="alternative" title="6. Solución Alternativa">
                    <p>
                        Otra alternativa para la compañia consiste en un sistema basado totalmente en la nube, a diferencia del sistema planteado el cual está en el sitio (<i>in-situ</i>). Dicho sistema abre las puertas al empleo de sistemas y combinaciones más diversas, haciendo posible utilizar una combinación de AWS y Azure, por ejemplo, u otros servicios que además  de  aprovechar  la  escalabilidad  de  los  mismos , podrían  distribuir  de  una  mejor  manera  las  cargas  de  trabajo  en  los recursos computacionales, realizar un menor esfuerzo en la administración de seguridad (muchos de los servicios <i>Cloud</i> tienen fuertes medidas de seguridad), almacenamiento, gestión de recursos,entre  otros  procesos, además  de  prescindir  de  mucha  de  la  infraestructura  necesaria  para  desplegar  la  solución  inicialmente planteada.
                    </p>

                    <Figure
                        title="Diagrama de arquitectura solución alternativa"
                        id="#alternative:fig"
                        figIndex="4"
                        img="https://i.imgur.com/ollRzbG.jpg"
                        imgStyle={{ "height": "550px", "width": "auto" }}
                    />

                </Section>

            </FinalProject>
        </div >
    );
}

const sections: ITOFItem[] = [
    {
        targetId: "context",
        displayName: "1. Contexto del Proyecto",
        subSections: [
            {
                targetId: "main-objectives",
                displayName: "Objetivo Principal"
            },
            {
                targetId: "side-objectives",
                displayName: "Objetivos Secundarios"
            },
        ]
    },
    {
        targetId: "video",
        displayName: "2. Recurso Visual del Proyecto"
    },
    {
        targetId: "proposal",
        displayName: "3. Nuestra Propuesta",
        subSections: [
            {
                targetId: "arch",
                displayName: "Arquitectura del Sistema"
            }
        ]
    },
    {
        targetId: "components",
        displayName: "4. Componentes de la Supercomputadora",
        subSections: [{
            targetId: "components:specs",
            displayName: "Especificaciones de los componentes"
        }]
    },
    {
        targetId: "technologies",
        displayName: "5. Tecnologías",
        subSections: [
            {
                targetId: "OS",
                displayName: "¿Qué sistema operativo tiene una supercomputadora?"
            },
            {
                targetId: "virtual-servers",
                displayName: "Servidores Virtuales ¿Cómo se crean?"
            },
            {
                targetId: "job-scheduler",
                displayName: "¿Cómo es posible distribuir una tarea a lo largo de muchos servidores?"
            },
            {
                targetId: "cloud-services",
                displayName: "Acceso a Recursos Computacionales Extra"
            }
        ]
    },
    {
        targetId: "alternative",
        displayName: "6. Solución Alternativa"
    }
]

const bibliography: Ibiblio = {
    title: "6. Bibliografía",
    items: [
        {
            srcName: "Cpu  mark  relative  to  top  10  common  server  cpus,  PassMark  Software  Pty  Ltd.  [Online].  Disponible: ",
            srcLink: "https://www.cpubenchmark.net/cpu.php?cpu=AMD+EPYC+7532&id=4482&cpu,%20Count=2",
            id: "bib:1"
        },
        {
            srcName: "O. F. B. Semra AYDIN, “Building a high performance computing clusters to use in computing course applications,”ELSEVIER, 2009.” [Online]. Disponible: ",
            srcLink: "https://github.com/rose/nand2tetris/blob/master/assembler.py",
            id: "bib:2"
        },
        {
            srcName: "2021) Getting started with high performance computing(hpc) in red hat enterprise linux 8.[Online]. Disponible: ",
            srcLink: "https://access.redhat.com/articles/4354751",
            id: "bib:3"
        },
        {
            srcName: "F. H. K. Karimi, N. G. Dickson, “A performance comparison of cuda and opencl,”arXiv, May 2011.",
            srcLink: "https://arxiv.org/pdf/1005.2581#:~:text=For%20all%20problem%20sizes%2C%20both,16%25%20and%2067%25%20slower.",
            id: "bib:4"
        },
        {
            srcName: "(2020)   Openshift   virtualization:   Virtual   machines,   containers,   and   serverless   together,   the   right   way.   [Online].   Disponible: ",
            srcLink: "https://cloud.redhat.com/learn/topics/virtualization/",
            id: "bib:5"
        }
    ]
}


export default FinalProjectPage;