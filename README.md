# Medbay

- [Medbay](#medbay)
  - [start Express-Server](#start-express-server)
  - [IDE-config](#ide-config)
  - [Styles](#styles)
    - [Colors](#colors)
    - [Fonts](#fonts)
  - [Dataguide](#dataguide)

## start Express-Server

1. `npm i`
2. `npm start`

## IDE-config

1. `npm i --inlcude=dev`
2. ` npm run dev`

extension live-sass-compiler installieren und den `watch sass` - button clicken

## Styles

### Colors

https://coolors.co/000814-001d3d-003566-ffc300-ffd60a

### Fonts

https://fonts.google.com/specimen/Montserrat

## Dataguide

Fields:

1. Patient reaction, as a MedDRA term. Note that these terms are encoded in British English.<br />
   Field-names:
   - `patient.reaction.reactionmeddrapt`
   - `patient.reaction.reactionmeddrapt.exact`
2. Established pharmacologic class associated with an approved indication of an active moiety (generic drug) that the FDA has determined to be scientifically valid and clinically meaningful.<br />
   Field-names:
   - `patient.drug.openfda.pharm_class_epc`
   - `patient.drug.openfda.pharm_class_epc.exact`
3. Chemical structure classification of the drug product’s pharmacologic class.<br />
   Field-names:
   - `patient.drug.openfda.pharm_class_cs`
   - `patient.drug.openfda.pharm_class_cs.exact`
4. Physiologic effect or pharmacodynamic effect—tissue, organ, or organ system level functional activity—of the drug’s established pharmacologic class.<br />
   Field-names:
   - `patient.drug.openfda.pharm_class_pe`
   - `patient.drug.openfda.pharm_class_pe.exact`
5. Mechanism of action of the drug—molecular, subcellular, or cellular functional activity—of the drug’s established pharmacologic class.<br />
   Field-names:
   - `patient.drug.openfda.pharm_class_moa`
   - `patient.drug.openfda.pharm_class_moa.exact`
