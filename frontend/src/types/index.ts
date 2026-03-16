export type Side = "left" | "right";

export interface ProgramItem {
  time:  string;
  title: string;
  desc:  string;
  side:  Side;
}

export interface InfoCard {
  readonly title: string;
  readonly body:  string;
  readonly link?: { href: string; label: string; };
}

export interface RSVPPayload {
  fname:     string;
  lname:     string;
  email:     string;
  attending: "ja" | "nei";
  guests:    number;
  allergies: string;
  message:   string;
}
