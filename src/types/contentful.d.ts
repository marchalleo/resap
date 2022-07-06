// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IFicheFields {
  /** Titre */
  titre: string;

  /** Identifiant */
  slug: string;

  /** Catégorie */
  categorie: "sante" | "besoins-primaires" | "social" | "interpretariat";

  /** Illustration */
  illustration: Asset;

  /** Description */
  description: string;

  /** Résumé */
  resume: Document;

  /** Contenu */
  contenu: Document;

  /** Tags */
  tags: string[];

  /** Pour aller plus loin */
  pourEnSavoirPlus?: ILien[] | undefined;

  /** Quelques Outils */
  outils?: ILien[] | undefined;

  /** Pour les patients */
  patients?: ILien[] | undefined;

  /** Type de dispositif */
  typeDispositif: (
    | "HUDA"
    | "SPADA"
    | "MSP"
    | "Associations caritatives - Distribution Alimentaire"
    | "CEGIDD"
    | "Centre de vaccination"
    | "CPTS"
    | "Filières gérontologiques"
    | "MDPH"
    | "PASS"
    | "CSAPA"
    | "CADA"
    | "SIAO"
    | "Accompagnement MNA"
    | "Association LGBTQIA+"
    | "Associations d'accompagnement personnes en situation de prostitution"
    | "CAARUD"
    | "COREVIH"
    | "Préfecture"
    | "OFII"
    | "Association d'aide aux migrants"
    | "Réseaux polyvalents (tous âges et toutes pathologies)"
    | "CPH"
    | "PRAHDA"
    | "CAES"
    | "CD"
  )[];
}

export interface IFiche extends Entry<IFicheFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "fiche";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILienFields {
  /** Titre */
  titre: string;

  /** Url */
  url?: string | undefined;

  /** Fichier */
  fichier?: Asset | undefined;
}

export interface ILien extends Entry<ILienFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "lien";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IStructureFields {
  /** Nom */
  nom: string;

  /** Nom organisation */
  organisation?: string | undefined;

  /** Type dispositif */
  type:
    | "HUDA"
    | "SPADA"
    | "MSP"
    | "Associations caritatives - Distribution Alimentaire"
    | "CEGIDD"
    | "Centre de vaccination"
    | "CLAT"
    | "CPTS"
    | "Filières gérontologiques"
    | "MDPH"
    | "PASS"
    | "CSAPA"
    | "CADA"
    | "SIAO"
    | "Accompagnement MNA"
    | "Association LGBTQIA+"
    | "Associations d’accompagnement personnes en situation de prostitution"
    | "CAARUD"
    | "COREVIH"
    | "Préfecture"
    | "OFII"
    | "Association d'aide aux migrants"
    | "Réseaux polyvalents (tous âges et toutes pathologies)"
    | "CPH"
    | "PRAHDA"
    | "CAES"
    | "CDS";

  /** Description */
  description?: string | undefined;

  /** Spécialités (tags) */
  specialites?: string[] | undefined;

  /** Emplacement (coordonnées) */
  latLon: { lat: number; lon: number };

  /** Adresse à afficher (texte) */
  adresse: string;

  /** Site web */
  siteWeb?: string | undefined;

  /** Téléphone */
  tel?: string | undefined;

  /** Email */
  email?: string | undefined;
}

export interface IStructure extends Entry<IStructureFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "structure";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "fiche" | "lien" | "structure";

export type LOCALE_CODE = "fr";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "fr";
