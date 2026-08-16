import type { ReactNode } from 'react';

export interface IService {
  kicker: string;
  title: string;
  desc: string;
  featured?: boolean;
  href: string
  icon: ReactNode;
}

export interface IStat {
  num: string;
  label: string;
  accent?: boolean;
}

export interface IProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ITestimonial {
  stars: string;
  text: string;
  name: string;
  time: string;
}

export interface IValue {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface ITeamMember {
  initial: string;
  bgColor: string;
  name: string;
  role: string;
  bio: string;
}

export interface IDifferentiator {
  eyebrow: string;
  title: string;
  text: string;
  list: string[];
  panel: 'ink' | 'parchment' | 'burgundy';
  panelLabel: string;
  panelRows: {
    icon: ReactNode;
    title: string;
    subtitle: string;
  }[];
  flip?: boolean;
  bar?: { percent: number; label: string; value: string };
}

export interface IAward {
  text: string;
}

export interface IEditingService {
  num: string;
  tag: string;
  title: string;
  desc: string;
  list: string[];
  featured?: boolean;
  ribbon?: string;
}

export interface IEditorCred {
  icon: ReactNode;
  iconBg: string;
  title: string;
  desc: string;
}

export interface IPricingPackage {
  tier: string;
  title: string;
  sub: string;
  price: string;
  unit: string;
  list: string[];
  popular?: boolean;
}

export interface IFAQ {
  q: string;
  a: string;
}

export interface IDeliverable {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface IDesignElement {
  visual: 'typo' | 'colours' | 'comp' | 'thumb';
  title: string;
  desc: string;
}

export interface IGenre {
  icon: string;
  name: string;
}

export interface IIncludedFeature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface IAgeCategory {
  emoji: string;
  range: string;
  title: string;
  desc: string;
}

export interface ISpreadStat {
  num: string;
  label: string;
}

export interface ISpecStat {
  num: string;
  label: string;
}