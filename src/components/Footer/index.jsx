import Text from "@/components/Text";
import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";
import { Container } from "./styles.js";

export default function Footer() {
    return (
        <Container>
            <Text
                type="link"
                text="Política de Privacidade"
                fontSize={typography.size.sm}
                fontWeight={typography.weight.bold}
                color={colors.grayDark}
                style={{ textDecoration: "underline" }}
            />
            <Text
                text="© 2024 Resultados Digitais"
                fontSize={typography.size.sm}
                fontWeight={typography.weight.bold}
                color={colors.gray}
            />
        </Container>
    )
}
