import type { Product } from "@/types/product";
import type { ProductInput } from "@/types/product";

const IMG = (_code: string) => "/placeholder-product.svg";

const rawRepuestos: ProductInput[] = [
{
    name: "Plaqueta electrónica BGL 188 Peisa",
    shortDescription: "Placa electrónica original para calderas Peisa Diva.",
    description:
      "Plaqueta electrónica BGL 188, repuesto original Peisa. Es el cerebro de control de las calderas murales Diva: compatible con todas las versiones modelo 2011 y posteriores, tanto solo calefacción como doble servicio, en tiro natural y tiro forzado, de 26.000 y 32.000 kcal.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000000"),
    code: "90000000",
    price: 627000, // ARS, precio de lista (tienda24calefaccion)
    tags: ["plaqueta", "placa electrónica", "BGL188", "diva", "original"],
    specs: {
      compatibleModels: [
        "Diva Solo Calefacción (2011 y posteriores)",
        "Diva Doble Servicio / Duo (2011 y posteriores)",
        "Diva Única (tiro natural y forzado)",
      ],
    },
  },
  {
    name: "Ventilador / forzador 47W Diva Duo o Única",
    shortDescription: "Ventilador forzador de 47W para calderas Peisa Diva tiro forzado.",
    description:
      "Ventilador (forzador) de 47W, repuesto original Peisa, para calderas Diva Duo F, Única F, DS o C de tiro forzado, en todos los modelos anteriores a 2019. Se encarga de la evacuación de los gases de combustión.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000090"),
    code: "90000090",
    price: 600674, // ARS, precio de lista (adroclima)
    tags: ["ventilador", "forzador", "47W", "diva duo", "diva única", "tiro forzado"],
    specs: {
      compatibleModels: [
        "Diva Duo F (anteriores a 2019)",
        "Diva Única F (anteriores a 2019)",
        "Diva DS / C tiro forzado (anteriores a 2019)",
      ],
    },
  },
  {
    name: "Ventilador 220V 50Hz 47W con soporte (Diva nueva generación)",
    shortDescription: "Ventilador 47W con soporte para Diva de nueva generación.",
    description:
      "Ventilador de 220V, 50Hz y 47W marca Sohon, con soporte incluido, para calderas Peisa Diva de nueva generación (modelo actual). Confirmar el código con el modelo y año de la caldera antes de reemplazar.",
    brand: "PEISA",
    featured: true,
    category: "repuestos",
    image: IMG("90000201"),
    code: "90000201",
    price: 451595, // ARS, precio de lista (prontodistribuidora)
    tags: ["ventilador", "47W", "sohon", "diva nueva generación"],
    specs: {
      voltage: "220V 50Hz",
      compatibleModels: ["Diva nueva generación (2019 en adelante)"],
    },
  },
  {
    name: "Flujostato de priorización ON/OFF Bitron",
    shortDescription: "Flujostato original Bitron ON/OFF para calderas Peisa Diva.",
    description:
      "Flujostato de priorización ON/OFF marca Bitron, repuesto original Peisa. Detecta el caudal de agua sanitaria y permite priorizar la producción de agua caliente sobre la calefacción. Compatible con Diva convencional 24/32 (modelo 2011 y actual).",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000054"),
    code: "90000054",
    price: 114428, // ARS, precio de lista (adroclima)
    tags: ["flujostato", "bitron", "priorización", "on/off", "diva"],
    specs: {
      compatibleModels: [
        "Diva convencional 24/32 (modelo 2011)",
        "Diva convencional 24/32 (modelo actual)",
        "Diva Duo F",
      ],
    },
  },
  {
    name: "Manómetro Ø37 blanco Diva / Donna",
    shortDescription: "Manómetro blanco de 37 mm para calderas Peisa Diva y Donna.",
    description:
      "Manómetro de 37 mm de diámetro, color blanco, repuesto original Peisa. Permite controlar la presión de agua del circuito de calefacción. Compatible con Diva Duo/Única Metro, 24 y 32 desde 2011 hasta la actualidad, y con Donna/Tantaqua.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000205"),
    code: "90000205",
    price: 133506, // ARS, precio de lista (adroclima)
    tags: ["manómetro", "presión", "diva", "donna", "tantaqua"],
    specs: {
      diameterMm: "37",
      compatibleModels: [
        "Diva Duo/Única Metro, 24 y 32 (2011 a actualidad)",
        "Donna / Tantaqua",
      ],
    },
  },
  {
    name: "Termostato de humos 110°C Donna / XP",
    shortDescription: "Termostato de humos 110°C para calderas Peisa Donna y XP.",
    description:
      "Termostato de humos de 110°C, repuesto original Peisa. Supervisa la temperatura de los gases de evacuación como dispositivo de seguridad. Compatible con calderas de pie Donna/Tantaqua y XP.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000127"),
    code: "90000127",
    price: 258338, // ARS, precio de lista (adroclima)
    tags: ["termostato", "humos", "110°C", "seguridad", "donna", "xp"],
    specs: { compatibleModels: ["Donna / Tantaqua", "XP"] },

  },
  {
    name: "Termostato de seguridad 110°C Donna / XP",
    shortDescription: "Termostato de seguridad 110°C para calderas Peisa Donna y XP.",
    description:
      "Termostato de seguridad de 110°C, repuesto original Peisa. Corta el funcionamiento de la caldera si la temperatura supera el límite, evitando sobrecalentamientos y daños en el equipo. Diseñado para los modelos Donna y XP.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000128"),
    code: "90000128",
    price: 330865, // ARS, precio de lista (prontodistribuidora)
    tags: ["termostato", "seguridad", "110°C", "sobrecalentamiento", "donna", "xp"],
    specs: { compatibleModels: ["Donna", "XP"] },
  },
  {
    name: "Termostato de regulación Donna / XP / TAB",
    shortDescription: "Termostato de regulación para calderas Peisa Donna, XP y TAB.",
    description:
      "Termostato de regulación, repuesto original Peisa, que controla la temperatura de trabajo del agua de la caldera. Aplica a los modelos Donna, XP y TAB.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000101"),
    code: "90000101",
    price: 99536, // ARS, precio de lista (broncesur)
    tags: ["termostato", "regulación", "donna", "xp", "tab"],
    specs: { compatibleModels: ["Donna", "XP", "TAB"] },
  },
  {
    name: "Termostato de seguridad 100-15°C Diva",
    shortDescription: "Termostato de seguridad tipo moneda para Diva 2011 a 2019.",
    description:
      "Termostato de seguridad 100-15°C, formato redondo chico (\"monedita\"), repuesto original Peisa. Compatible con todas las calderas murales Diva fabricadas entre 2011 y 2019.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000083"),
    code: "90000083",
    price: 46798, // ARS, precio de lista (adroclima)
    tags: ["termostato", "seguridad", "monedita", "diva"],
    specs: { compatibleModels: ["Diva mural (2011 a 2019)"] },
  },
  {
    name: "Termostato de humos / seguridad 80°C Diva / Donna",
    shortDescription: "Termostato de humos 80°C tipo moneda para Diva 2019+ y Donna.",
    description:
      "Termostato de humos / seguridad de 80°C, formato redondo chico (\"monedita\"), repuesto original Peisa. Compatible con calderas murales Diva modelo 2019 y posteriores y con calderas de pie Donna.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000097"),
    code: "90000097",
    price: 37000, // ARS, precio de lista (tienda24calefaccion)
    tags: ["termostato", "humos", "80°C", "seguridad", "monedita", "diva", "donna"],
    specs: { compatibleModels: ["Diva mural (2019 y posteriores)", "Donna"] },
  },
  {
    name: "Presostato de humos 0,9 mbar Donna",
    shortDescription: "Presostato de humos 0,9 mbar original para Peisa Donna.",
    description:
      "Presostato de humos de 0,9 mbar (90/70 Pa), repuesto original Peisa para calderas Donna. Verifica que la evacuación de gases sea correcta y habilita el encendido del quemador. Consultar compatibilidad con Diva tiro forzado 2011-2019 antes de usarlo en esos modelos.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000237"),
    code: "90000237",
    price: 83590, // ARS, precio de lista (broncesur)
    tags: ["presostato", "humos", "0,9 mbar", "donna"],
    specs: { compatibleModels: ["Donna"] },
  },
  {
    name: "Sensor de temperatura de contacto Diva",
    shortDescription: "Sensor de temperatura por contacto para calderas Peisa Diva.",
    description:
      "Sensor de temperatura de contacto, repuesto original Peisa para calderas murales Diva. Informa a la placa electrónica la temperatura del circuito para regular el funcionamiento del equipo.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000079"),
    code: "90000079",
    price: 31961, // ARS, precio de lista (broncesur)
    tags: ["sensor", "temperatura", "contacto", "diva"],
    specs: { compatibleModels: ["Diva"] },
  },
  {
    name: "Grifo de llenado con vástago",
    shortDescription: "Grifo de llenado de caldera, repuesto original Peisa.",
    description:
      "Grifo con vástago para el llenado del circuito de la caldera, repuesto original Peisa. Se usa para reponer agua y recuperar la presión de la instalación.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000108"),
    code: "90000108",
    price: 31022, // ARS, precio de lista (broncesur)
    tags: ["grifo", "llenado", "vástago"],
  },
  {
    name: "Intercambiador primario Diva S Condensación 24 kW",
    shortDescription: "Kit de intercambiador primario para Diva S Condensación 24 kW.",
    description:
      "Kit original Peisa de intercambiador primario de calor para la caldera Diva S Condensación 24 kW. Incluye los componentes de montaje para una reposición completa: tapón, juntas y o-rings, aislante frontal, panel delantero, junta de fibra cerámica, kit de mirilla, quemador premezcla y electrodo de encendido.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000262"),
    code: "90000262",
    price: 4874837, // ARS, precio de lista (tiendadelmarcalefaccion)
    tags: ["intercambiador", "primario", "condensación", "diva s", "kit"],
    specs: {
      powerKw: 24,
      technology: "condensación",
      compatibleModels: ["Diva S Condensación 24 kW"],
    },
  },
  {
    name: "Conjunto clips D14 para intercambiador Diva",
    shortDescription: "Clips de fijación del intercambiador en calderas Peisa Diva.",
    description:
      "Conjunto de clips D14 original Peisa que asegura la correcta fijación del intercambiador en calderas Diva. Fácil instalación.",
    brand: "PEISA",
    category: "repuestos",
    image: IMG("90000228"),
    code: "90000228",
    price: 21180, // ARS, precio de lista (prontodistribuidora)
    tags: ["clips", "D14", "intercambiador", "fijación", "diva"],
    specs: { compatibleModels: ["Diva"] },
  },]
  

export const repuestos: Product[] = rawRepuestos.map((p, i) => ({
  id: `${p.category}-${i}`,
  ...p,
}));
