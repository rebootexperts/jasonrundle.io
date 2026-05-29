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
  Certification,
  Education,
  SkillCategory,
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
  const { profile, experiences, projects, certifications, education, skills } = data;
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

        {certifications.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Certifications</Text>
            <CertificationsBlock items={certifications} />
          </>
        )}

        {education.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Education</Text>
            <EducationBlock items={education} />
          </>
        )}

        {skills.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Skills</Text>
            <SkillsBlock items={skills} />
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

function CertificationsBlock({ items }: { items: Certification[] }) {
  return (
    <View>
      {items.map((c) => (
        <View key={c.id} style={styles.entryRow} wrap={false}>
          <View style={styles.entryProse}>
            <Text style={{ fontSize: 10.5, color: TEXT }}>
              <Text style={{ fontFamily: "Helvetica-Bold" }}>{c.name}</Text>
              {c.issuer && <Text style={{ color: TEXT_MUTED }}>{`, ${c.issuer}`}</Text>}
            </Text>
          </View>
          <View style={styles.entryMeta}>
            <Text style={styles.metaText}>{c.year ?? ""}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function EducationBlock({ items }: { items: Education[] }) {
  return (
    <View>
      {items.map((e) => (
        <Text
          key={e.id}
          style={{ fontSize: 10.5, color: TEXT_MUTED, marginBottom: 4, lineHeight: 1.55 }}
        >
          {e.statement}
        </Text>
      ))}
    </View>
  );
}

function SkillsBlock({ items }: { items: SkillCategory[] }) {
  return (
    <View>
      {items.map((s) => (
        <View key={s.id} style={styles.entryRow} wrap={false}>
          <View style={styles.entryProse}>
            <Text style={{ fontSize: 10, color: TEXT_MUTED, lineHeight: 1.55 }}>
              {s.items.join(" · ")}
            </Text>
          </View>
          <View style={styles.entryMeta}>
            <Text style={styles.metaText}>{s.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
