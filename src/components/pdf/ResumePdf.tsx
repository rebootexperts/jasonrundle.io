import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { formatDateRange } from "@/lib/formatDate";
import type {
  ResumeData,
  Profile,
  Experience,
  Project,
  Qualification,
} from "@/types/resume";

const ACCENT = "#b45309";
const TEXT = "#1c1917";
const TEXT_MUTED = "#525252";
const TEXT_META = "#737373";
const TEXT_SUBTLE = "#a3a3a3";

const styles = StyleSheet.create({
  page: {
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 64,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: TEXT,
    lineHeight: 1.55,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    letterSpacing: -0.4,
  },
  headline: {
    fontSize: 12,
    color: TEXT_MUTED,
    marginTop: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  contactItem: {
    fontFamily: "Courier",
    fontSize: 7.5,
    color: TEXT_META,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginRight: 14,
  },
  link: {
    color: TEXT_META,
    textDecoration: "none",
  },
  sectionHeading: {
    fontFamily: "Courier-Bold",
    fontSize: 8,
    color: ACCENT,
    textTransform: "uppercase",
    letterSpacing: 1.4,
    marginTop: 24,
    marginBottom: 10,
  },
  summary: {
    fontSize: 10.5,
    color: TEXT_MUTED,
    lineHeight: 1.6,
    marginTop: 18,
  },
  entryRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  entryProse: {
    flex: 1,
    marginRight: 14,
  },
  entryMeta: {
    width: 104,
    textAlign: "right",
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 11.5,
  },
  entryCompany: {
    fontSize: 10,
    color: TEXT_MUTED,
    marginTop: 1,
  },
  entrySummary: {
    fontSize: 10,
    color: TEXT_MUTED,
    marginTop: 6,
    lineHeight: 1.55,
  },
  highlight: {
    flexDirection: "row",
    fontSize: 10,
    color: TEXT_MUTED,
    marginTop: 4,
    lineHeight: 1.5,
  },
  bullet: {
    color: ACCENT,
    width: 8,
    fontSize: 12,
  },
  metaText: {
    fontFamily: "Courier",
    fontSize: 7.5,
    color: TEXT_META,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 2,
  },
  metaPrimary: {
    color: TEXT,
  },
  metaTech: {
    color: TEXT_SUBTLE,
    marginTop: 6,
  },
});

export function ResumePdf({ data }: { data: ResumeData }) {
  const { profile, experiences, projects, qualifications } = data;
  return (
    <Document title={profile.name} author={profile.name}>
      <Page size="LETTER" style={styles.page}>
        <Header profile={profile} />
        <Text style={styles.summary}>{profile.summary}</Text>

        {experiences.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Experience</Text>
            {experiences.map((exp) => (
              <ExperienceEntry key={exp.id} experience={exp} />
            ))}
          </>
        )}

        {projects.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Selected Projects</Text>
            {projects.map((p) => (
              <ProjectEntry key={p.id} project={p} />
            ))}
          </>
        )}

        {qualifications.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Qualifications</Text>
            <QualificationsBlock items={qualifications} />
          </>
        )}
      </Page>
    </Document>
  );
}

function Header({ profile }: { profile: Profile }) {
  return (
    <View>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.headline}>{profile.headline}</Text>
      <View style={styles.contactRow}>
        <Text style={styles.contactItem}>{profile.location}</Text>
        {profile.contact.map((c) => (
          <Link key={c.label} src={c.href} style={[styles.contactItem, styles.link]}>
            {c.display ?? c.label}
          </Link>
        ))}
      </View>
    </View>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  const e = experience;
  return (
    <View style={styles.entryRow} wrap={false}>
      <View style={styles.entryProse}>
        <Text style={styles.entryTitle}>{e.title}</Text>
        <Text style={styles.entryCompany}>{e.company}</Text>
        <Text style={styles.entrySummary}>{e.summary}</Text>
        {e.highlights.map((h, i) => (
          <View key={i} style={styles.highlight}>
            <Text style={styles.bullet}>•</Text>
            <Text style={{ flex: 1 }}>{h}</Text>
          </View>
        ))}
      </View>
      <View style={styles.entryMeta}>
        <Text style={[styles.metaText, styles.metaPrimary]}>
          {formatDateRange(e.startDate, e.endDate)}
        </Text>
        {e.location && <Text style={styles.metaText}>{e.location}</Text>}
        {e.scope && <Text style={styles.metaText}>{e.scope}</Text>}
        {e.tech && e.tech.length > 0 && (
          <Text style={[styles.metaText, styles.metaTech]}>
            {e.tech.join(" · ")}
          </Text>
        )}
      </View>
    </View>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <View style={styles.entryRow} wrap={false}>
      <View style={styles.entryProse}>
        {project.href ? (
          <Link src={project.href} style={[styles.entryTitle, { color: TEXT, textDecoration: "none" }]}>
            {project.title}
          </Link>
        ) : (
          <Text style={styles.entryTitle}>{project.title}</Text>
        )}
        <Text style={styles.entrySummary}>{project.summary}</Text>
      </View>
      <View style={styles.entryMeta}>
        <Text style={[styles.metaText, styles.metaPrimary]}>{project.year}</Text>
        {project.tech && project.tech.length > 0 && (
          <Text style={[styles.metaText, styles.metaTech]}>
            {project.tech.join(" · ")}
          </Text>
        )}
      </View>
    </View>
  );
}

const KIND_LABEL: Record<Qualification["kind"], string> = {
  education: "Education",
  certification: "Certifications",
  skill: "Skills",
  other: "Other",
};

const KIND_ORDER: Qualification["kind"][] = [
  "education",
  "certification",
  "skill",
  "other",
];

function QualificationsBlock({ items }: { items: Qualification[] }) {
  const groups = KIND_ORDER.map((kind) => ({
    kind,
    items: items.filter((q) => q.kind === kind),
  })).filter((g) => g.items.length > 0);

  return (
    <View>
      {groups.map((g) => (
        <View key={g.kind} style={styles.entryRow} wrap={false}>
          <View style={styles.entryProse}>
            {g.items.map((q) => (
              <View key={q.id} style={{ marginBottom: 6 }}>
                <Text style={{ fontSize: 10.5, color: TEXT }}>
                  <Text style={{ fontFamily: "Helvetica-Bold" }}>{q.title}</Text>
                  {q.institution && <Text style={{ color: TEXT_MUTED }}>{`, ${q.institution}`}</Text>}
                  {q.year && (
                    <Text style={{ fontFamily: "Courier", fontSize: 7.5, color: TEXT_META, textTransform: "uppercase", letterSpacing: 0.6 }}>
                      {` · ${q.year}`}
                    </Text>
                  )}
                </Text>
                {q.detail && (
                  <Text style={{ fontSize: 9.5, color: TEXT_MUTED, marginTop: 2, lineHeight: 1.55 }}>
                    {q.detail}
                  </Text>
                )}
              </View>
            ))}
          </View>
          <View style={styles.entryMeta}>
            <Text style={styles.metaText}>{KIND_LABEL[g.kind]}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
