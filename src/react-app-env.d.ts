/// <reference types="react-scripts" />

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