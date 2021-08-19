/// <reference types="react-scripts" />

interface IntrinsicProps {
    id?: string;
}

type MemberProps = Imember & {
    index: number;
}

interface Imember {
    name: string;
    content: string;
    image: string;
    github: string;
}

interface Ilab {
    id: number;
    header: string;
    title: string;
    raw_questions: string[],
    date: string;
    files?: string[]
}

interface IlabUrlParams {
    labId: string;
}

interface NavbarProps {
    theme: "light" | "dark";
}

interface ImemberCard {
    srcImg: string;
    displayName: string;
}

type MemberCardProps = ImemberCard & {
    redirectUrl: string;
}

type LabPreviewProps = Ilab & {
    index: number;
}

interface QuestionPreviewProps {
    index: number;
    questions: string[];
}

interface LabFileProps {
    src: string;
}

interface Isection {
    href: string;
    displayName: string;
}

interface TableOfContentProps {
    questions: string[];
    sections: Isection[];
}

interface SectionProps {
    id: string;
    title: string;
}

interface DownloadFilesButtonProps {
    files: string[];
    zipSrc: string;
}

interface CodeBlockProps {
    filePath: string;
}

type LabAnswerProps = IntrinsicProps & {
    question: string;
    text?: string[];
}

interface GateSectionProps {
    title: string;
}

interface GateDiagramProps {
    img: string;
    title: string;
    src: string;
}