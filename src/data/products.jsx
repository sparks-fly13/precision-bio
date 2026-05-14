import { motion } from "framer-motion";
import StainlessSteelSheet from "../assets/304 stainless steel sheet - multi-fold (wavy spring).avif";
import CoinCellCase from "../assets/304SS Coin Cell Case (Four Pieces) CR2032.webp";
import CoinCellSpacer from "../assets/304SS Coin Cell Spacer CR2032.png";
import SiliconNanopowder from "../assets/Silicon_Nanopowder .jpeg";
import BatteryElectrode from "../assets/Battery Electrode (Sodium-ion Negative Electrode).jpeg";
import BatteryTestingEquipment from "../assets/BATTERY TESTING equipent.avif";
import ClipOnBatteryLabel from "../assets/Clip-on Battery Label Light.jpeg";
import CopperFoam from "../assets/Copper foam.jpg.jpeg";
import GlassFiberMembrane from "../assets/Glass Fiber MembraneSeparator.jpg.jpeg";
import GloveBox from "../assets/GLOVE BOX.png";
import HeatPressTablet from "../assets/heat press tablet.jpeg";
import HotPlates from "../assets/Hot Plates.jpeg";
import HardCarbon from "../assets/Imported hard carbon.png";
import IronNickleFoam from "../assets/Iron Nickel Foam.jpeg";
import LabFurnace from "../assets/LAB FURNACE.jpeg";
import Centrifuge from "../assets/Laboratory centrifuge.jpeg";
import LisCathodeBattery from "../assets/Li-S Battery Cathode.png";
import LithiumChipFoil from "../assets/Lithium Chip Lithium Foil.jpeg";
import LiCoOxide from "../assets/Lithium cobalt oxide (magnification type)-C.png";
import LithiumElectrolytes from "../assets/Lithium Electrolytes.jpg.jpeg";
import NCM523Precursor from "../assets/NCM523 Precursor Polycrystalline.png";
import NCM811 from "../assets/Nickel Cobalt Manganese NCM811 (Polycrystalline) D.png";
import NickelFoam from "../assets/Nickel foam.jpeg";
import NickelFoil from "../assets/Nickel Foil.jpg.jpeg";
import PipettingDevice from "../assets/Pipetting Device.jpeg";
import PPPE from "../assets/PPPE Separation Membrane.avif";
import PrussianBluePowder from "../assets/Prussian Blue-A Powder For Sodium-Ion Battery Cathode.png";
import LithiumMnBase from "../assets/Rich Lithium Manganese Base.webp";
import SodiumChipNegativePiece from "../assets/Sodium Chip (Battery negative pieceNa Chip).avif";
import NT03XX from "../assets/Sodium-Ion Battery (NT03XX).png";
import TabletPress from "../assets/Tablet Press.jpeg";
import VacuumMagnetron from "../assets/Vacuum Magnetron Sputtering Coating Machine.avif";
import ZincAnodePlate from "../assets/Zinc anode electrode plate (carbon coated copper foil substrate).webp";
import ZincSheet from "../assets/zinc sheet.jpeg";
import ZincIonSeparator from "../assets/Zinc-ion Battery Separator Film.jpeg";
import CoatingEquipment from "../assets/Coating Equipment.png";
import CoinCellCrimper from "../assets/Coin cell crimper machine.png";
import DesktopHeated from "../assets/Desktop Horizontal heated Roll.png";
import GrindingEquipment from "../assets/Grinding equipment.jpeg";
import NickelRoll from "../assets/High Purity Nickel Foil Roll.png";
import LithiumIonFoil from "../assets/Lithium Ion Battery Copper Foil.png";
import Methyl from "../assets/N-methylpyrrolidone (NMP).png";
import Neware from "../assets/Neware- CT-4008Q-5V15A - Battery Testing Equipment.jpeg";
import PETFilm from "../assets/PET Protective film.png";
import AlFoil from "../assets/Three-Dimensional Porous Aluminum Foil Collector.png";
import VacuumMixer from "../assets/Vaccum mixer.png";

const imgClass = "w-full h-full object-cover";

export const productCategories = [
  {
    id: "battery-materials",
    name: "Battery Materials",
    description: "High-performance cathode, anode, and electrolyte materials for advanced battery research and development.",
    icon: "Battery",
    subcategories: [
      {
        id: "cathode-active-material",
        name: "Cathode Active Material",
        description: "Premium cathode materials for lithium-ion, sodium-ion, and next-generation battery systems.",
        products: [
          { name: "Lithium Nickel Oxide (LNO) Lithium Supplement",
            image: <motion.img src={LiCoOxide} alt="Lithium Nickel Oxide (LNO) Lithium Supplement" className={imgClass} />,
           },
          { name: "Li-S Battery Cathode - C, 100 Mesh (99.999% Pure)",
            image: <motion.img src={LisCathodeBattery} alt="Li-S Battery Cathode - C, 100 Mesh (99.999% Pure)" className={imgClass} />,
           },
          { name: "NCM523 Precursor - Polycrystalline",
            image: <motion.img src={NCM523Precursor} alt="NCM523 Precursor Polycrystalline" className={imgClass} />,
           },
          { name: "Lithium Cobalt Oxide (Magnification Type) - C",
            image: <motion.img src={LiCoOxide} alt="Lithium Cobalt Oxide (Magnification Type) - C" className={imgClass} />,
           },
          { name: "Sodium-Ion Battery Nickel-Iron-Manganese Sodium Oxide Cathode Sheet (NT03XX)",
            image: <motion.img src={NT03XX} alt="Sodium-Ion Battery - NT03XX" className={imgClass} />,
           },
          { name: "Nickel Cobalt Manganese NCM811 (Polycrystalline) - D",
            image: <motion.img src={NCM811} alt="Nickel Cobalt Manganese NCM811 (Polycrystalline) - D" className={imgClass} />,
           },
          { name: "Prussian Blue-A Powder For Sodium-Ion Battery Cathode",
            image: <motion.img src={PrussianBluePowder} alt="Prussian Blue-A Powder For Sodium-Ion Battery Cathode" className={imgClass} />,
           },
          { name: "Rich Lithium Manganese Base",
            image: <motion.img src={LithiumMnBase} alt="Rich Lithium Manganese Base" className={imgClass} />,
           },
          { name: "Zinc Anode Electrode Plate (Carbon Coated Copper Foil Substrate)",
            image: <motion.img src={ZincAnodePlate} alt="Zinc Anode Electrode Plate" className={imgClass} />,
           },
        ],
      },
      {
        id: "anode-materials",
        name: "Anode Materials",
        description: "Advanced anode materials including hard carbon, silicon, and graphite for superior battery performance.",
        products: [
          { name: "Imported Hard Carbon",
            image: <motion.img src={HardCarbon} alt="Imported Hard Carbon" className={imgClass} />,
           },
          {
            name: "Silicon Nanopowder (80-100nm)",
            image: <motion.img src={SiliconNanopowder} alt="Silicon Nanopowder 80-100nm" className={imgClass} />,
          },
          { name: "Sodium Ion Hard Carbon" },
          { name: "Natural Graphite" },
          { name: "Imported Activated Carbon" },
          { name: "Lithium Titanate" },
          { name: "Sodium Ion Negative Electrode Strip" },
          { name: "Silicon Carbon Alloy" },
          { name: "Nickel Cobalt Aluminium Ni95" },
        ],
      },
      {
        id: "coin-cell-parts",
        name: "Button / Coin Cell Parts",
        description: "Complete coin cell assembly components including cases, spacers, lithium chips, and accessories.",
        products: [
          { name: "Lithium Chip / Lithium Foil",
            image: <motion.img src={LithiumChipFoil} alt="Lithium Chip / Lithium Foil" className={imgClass} />,
          },
          {
            name: "304SS Coin Cell Case (Four Pieces) CR2032 / 2025 / 2016 / 2430",
            image: <motion.img src={CoinCellCase} alt="304SS Coin Cell Case (Four Pieces) CR2032" className={imgClass} />,
          },
          {
            name: "304SS Coin Cell Spacer CR2032 / 2025 / 2016 / 2430",
            image: <motion.img src={CoinCellSpacer} alt="304SS Coin Cell Spacer CR2032" className={imgClass} />,
          },
          { name: "316L SS Coin Cell Case Set (Four Pieces) CR2032 / 2025 / 2016 / 2430" },
          { name: "316 SS Coin Cell Case Spacer / Sealing Spacer" },
          { name: "Sodium Chip (Battery Negative Piece / Na Chip)",
            image: <motion.img src={SodiumChipNegativePiece} alt="Sodium Chip (Battery Negative Piece Na Chip)" className={imgClass} />,
           },
          { name: "Clip-on Battery Label Light",
            image: <motion.img src={ClipOnBatteryLabel} alt="Clip-on Battery Label" className={imgClass} />,
          },
          { name: "Battery Electrode (Sodium-ion Negative Electrode) – With Aluminum Foil",
            image: <motion.img src={BatteryElectrode} alt="Battery Electrode Sodium-ion Negative Electrode With Aluminum Foil" className={imgClass} />,
          },
          { name: "Nickel Plated Battery Case" },
          {
            name: "304 Stainless Steel Sheet - Multi-fold (Wavy Spring)",
            image: <motion.img src={StainlessSteelSheet} alt="304 Stainless Steel Sheet Multi-fold Wavy Spring" className={imgClass} />,
          },
          { name: "Zinc Sheet",
            image: <motion.img src={ZincSheet} alt="Zinc Sheet" className={imgClass} />,
           },
        ],
      },
      {
        id: "electrolytes",
        name: "Electrolytes",
        description: "Research-grade electrolyte solutions for lithium-ion, sodium-ion, and specialized battery chemistries.",
        products: [
          { name: "Lithium Electrolytes",
            image: <motion.img src={LithiumElectrolytes} alt="Lithium Electrolytes" className={imgClass} />,
           },
          { name: "Sodium Electrolytes" },
          { name: "Other Electrolytes" },
        ],
      },
      {
        id: "separator-membranes",
        name: "Separator Membranes",
        description: "High-quality separator films and membranes for optimal ion transport and battery safety.",
        products: [
          { name: "Zinc-ion Battery Separator Film / Membrane",
            image: <motion.img src={ZincIonSeparator} alt="Zinc-ion Battery Separator Film" className={imgClass} />,
           },
          { name: "Research-Grade Nickel Foil",
            image: <motion.img src={NickelFoil} alt="Research-Grade Nickel Foil" className={imgClass} />,
           },
          { name: "Glass Fiber Membrane / Separator GF/A",
            image: <motion.img src={GlassFiberMembrane} alt="Glass Fiber Membrane Separator" className={imgClass} />,
          },
          { name: "PP/PE Separation Membrane (12um)",
            image: <motion.img src={PPPE} alt="PP/PE Separation Membrane" className={imgClass} />,
           },
        ],
      },
      {
        id: "current-collectors",
        name: "Current Collectors",
        description: "Precision-engineered foils, meshes, and conductive substrates for efficient current collection.",
        products: [
          { name: "PET Composite Copper Foil (CU+PET+CU)" },
          { name: "Lithium Ion Battery Cu Foil Roll 8um",
            image: <motion.img src={LithiumIonFoil} alt="Lithium Ion Battery Cu Foil Roll 8um" className={imgClass} />,
           },
          { name: "Three-Dimensional Porous Copper Foil" },
          { name: "Conductive Carbon Coated Copper Foil" },
          { name: "Aluminum Foil For Lithium Battery 12um" },
          { name: "Three-Dimensional Porous Aluminum Foil Collector",
            image: <motion.img src={AlFoil} alt="Three-Dimensional Porous" className={imgClass} />,
           },
          { name: "Copper Mesh Foil Width 200mm" },
          { name: "Aluminium Mesh Foil Width 200mm" },
          { name: "High Purity Nickel Foil Roll",
            image: <motion.img src={NickelRoll} alt="High Purity Nickel Foil Roll" className={imgClass} />,
           },
          { name: "Carbon Fiber Conductive Material" },
          { name: "Carbon Fiber Cloth Conductive Material" },
          { name: "Graphite Electrode Sheet 99.99%" },
          { name: "Lithium Ion Battery Copper Foil 8um",
            image: <motion.img src={LithiumIonFoil} alt="Lithium Ion Battery Copper Foil 8um" className={imgClass} />,
           },
          { name: "Lithium Ion Battery Aluminium Foil 16um" },
        ],
      },
      {
        id: "foams",
        name: "Foams",
        description: "Metallic foam substrates for enhanced electrode performance and advanced battery architectures.",
        products: [
          { name: "Copper Foam",
            image: <motion.img src={CopperFoam} alt="Copper Foam" className={imgClass} />,
          },
          { name: "Iron Nickel Foam",
            image: <motion.img src={IronNickleFoam} alt="Iron Nickel Foam" className={imgClass} />,
           },
          { name: "Nickel Foam",
            image: <motion.img src={NickelFoam} alt="Nickel Foam" className={imgClass} />,
           },
        ],
      },
      {
        id: "other-materials",
        name: "Other Materials",
        description: "Supplementary battery materials including cell cases, solvents, and protective films.",
        products: [
          { name: "18650 Cylinder Cell Case" },
          { name: "N-Methylpyrrolidone (NMP)",
            image: <motion.img src={Methyl} alt="N-Methylpyrrolidone (NMP)" className={imgClass} />,
           },
          { name: "PET Protective Film",
            image: <motion.img src={PETFilm} alt="PET Protective Film" className={imgClass} />,
           },
        ],
      },
    ],
  },
  {
    id: "experimental-equipment",
    name: "Experimental Equipment",
    description: "State-of-the-art laboratory equipment for battery manufacturing, testing, and material characterization.",
    icon: "FlaskConical",
    subcategories: [
      {
        id: "battery-manufacturing",
        name: "Battery Manufacturing",
        description: "Complete battery fabrication line from mixing to encapsulation for R&D and pilot-scale production.",
        products: [
          { name: "Vacuum Mixer",
            image: <motion.img src={VacuumMixer} alt="Vacuum Mixer" className={imgClass} />,
           },
          { name: "Automatic Coating Machine" },
          { name: "Automatic Coating Infrared Dryer" },
          { name: "Desktop Horizontal Heated Roll",
            image: <motion.img src={DesktopHeated} alt="Desktop Horizontal Heated Roll" className={imgClass} />,
           },
          { name: "Table Top Heated Roller Press" },
          { name: "Film Coating Equipment" },
          { name: "Welding Equipment" },
          { name: "Encapsulation Equipment" },
        ],
      },
      {
        id: "battery-testing",
        name: "Battery Testing",
        description: "Precision testing instruments for comprehensive battery performance evaluation and quality control.",
        products: [
          { name: "Neware CT-4008Q-5V15A Battery Testing Equipment",
            image: <motion.img src={Neware} alt="Neware CT-4008Q-5V15A" className={imgClass} />,
           },
          { name: "Movable Rack for Coin Cell Tester" },
          { name: "8 Channels Coin Cell Testing Board for CR2016" },
          { name: "Battery Analyser for Coin Cell" },
          { name: "Coin Cell Testing Clamps" },
          { name: "Benchtop Battery Testing Thermal Chamber" },
          { name: "Viscometer" },
          { name: "Moisture Testing Equipment" },
        ],
      },
      {
        id: "material-manufacturing",
        name: "Material Manufacturing",
        description: "Essential equipment for material synthesis, processing, and preparation in research environments.",
        products: [
          { name: "Grinding Equipment",
            image: <motion.img src={GrindingEquipment} alt="Grinding Equipment" className={imgClass} />,
           },
          { name: "Coating Equipment",
            image: <motion.img src={CoatingEquipment} alt="Coating Equipment" className={imgClass} />,
           },
          { name: "Tablet Press",
            image: <motion.img src={TabletPress} alt="Tablet Press" className={imgClass} />,
           },
        ],
      },
      {
        id: "glove-box",
        name: "Glove Box",
        description: "Inert atmosphere glove boxes for moisture and oxygen-sensitive material handling.",
        products: [
          { name: "Table Glove Box",
            image: <motion.img src={GloveBox} alt="Table Glove Box" className={imgClass} />,
           },
          { name: "Standard Glove Box" },
        ],
      },
      {
        id: "lab-furnace",
        name: "Lab Furnace",
        description: "High-temperature furnaces and deposition systems for material synthesis and thin-film processing.",
        products: [
          { name: "Tube Furnace",
            image: <motion.img src={LabFurnace} alt="Tube Furnace" className={imgClass} />
           },
          { name: "Atmosphere Furnace" },
          { name: "CVD & PECVD & ALD System" },
        ],
      },
      {
        id: "laboratory-devices",
        name: "Laboratory Devices",
        description: "General-purpose lab instruments for sample preparation, analysis, and material characterization.",
        products: [
          { name: "Laboratory Centrifuge",
            image: <motion.img src={Centrifuge} alt="Laboratory Centrifuge" className={imgClass} />,
           },
          { name: "Pipetting Device",
            image: <motion.img src={PipettingDevice} alt="Pipetting Device" className={imgClass} />,
           },
          { name: "Hot Plates and Magnetic Stirrers",
            image: <motion.img src={HotPlates} alt="Hot Plates and Magnetic Stirrers" className={imgClass} />,
           },
          { name: "Hand Press and Heat Press Tablet",
            image: <motion.img src={HeatPressTablet} alt="Hand Press and Heat Press Tablet" className={imgClass} />,
           },
          { name: "Vacuum Magnetron Sputtering Coating Machine",
            image: <motion.img src={VacuumMagnetron} alt="Vacuum Magnetron Sputtering Coating Machine" className={imgClass} />,
           },
        ],
      },
    ],
  },
];

export const companyInfo = {
  name: "Precision Bioelectronics",
  tagline: "One-Stop Provider for Energy Research",
  subtitle: "Battery Consumable Solutions - Your Trusted Supplier",
  phone: "+91 9953242466",
  email: "aksheykaushal@gmail.com",
  contactEmail: "pulkitsinhaor@gmail.com",
  address: {
    line1: "Flat No T4, Block 3, Rohit Kunj Local Shopping Center",
    line2: "3rd Floor, Veerhemu Marg, Pitampura",
    city: "Delhi",
    state: "Delhi",
    pin: "110034",
    country: "India",
  },
  udyamNumber: "UDYAM-DL-06-0199128",
  incorporationDate: "12/02/2026",
  about: [
    "Precision Bioelectronics is a national enterprise with a fresh perspective on the global new energy field, backed by our customers in lithium batteries, silicon-carbon anodes, sodium-ion batteries and updated technologies.",
    "Certified MSME, Precision Bioelectronics focuses on three pillars: pilot cell validation, equipment R&D, and materials sourcing, delivering full-chain solutions from R&D to production. Precision Bioelectronics serves many top institutions across the country, driving breakthroughs in power batteries and energy storage.",
  ],
  highlights: [
    "High-performance materials and equipment for research",
    "Battery materials for cathode, anode, separator, and electrolyte",
    "Expert technical support from our parent company",
  ],
  vision: "To become a globally leading one-stop service provider in energy research",
  mission: "To establish a high-speed channel for industry-academia research",
  values: "Ignite ourselves for society",
  whyChooseUs: [
    {
      title: "Reliable & Cost-effective",
      description: "Premium quality materials at competitive prices with rigorous quality control at every step.",
      icon: "ShieldCheck",
    },
    {
      title: "Flexible Payment",
      description: "Multiple payment options and flexible terms designed to support research budgets of all sizes.",
      icon: "CreditCard",
    },
    {
      title: "Strong Delivery",
      description: "Robust logistics network ensuring timely delivery across the country with careful handling.",
      icon: "Truck",
    },
  ],
  social: {
    linkedin: "https://linkedin.com/company/precision-bioelectronics",
    twitter: "https://twitter.com/precisionbioelec",
    facebook: "https://facebook.com/precisionbioelectronics",
    instagram: "https://instagram.com/precisionbioelectronics",
  },
};
