import { Container, Title, Text, Grid, Card, ThemeIcon, Stack, List, Badge, Group } from '@mantine/core'
import { 
  IconRobot, 
  IconCode, 
  IconBrain, 
  IconTarget, 
  IconCertificate,
  IconTrendingUp
} from '@tabler/icons-react'

export function AboutSection() {
  const skills = [
    { name: 'Python', stars: 4 },
    { name: 'Playwright', stars: 5 },
    { name: 'BDD / BEHAVE', stars: 4 },
    { name: 'CI/CD', stars: 4 },
    { name: 'Database Testing', stars: 4.5 },
    { name: 'API Testing', stars: 5 },
    { name: 'UI Testing', stars: 5 },
    { name: 'English', stars: 4.5 },
    { name: 'Java/Selenium', stars: 3.5 },
    { name: 'Pytest', stars: 5 }
  ]

  const renderStars = (count: number) => {
    const fullStars = Math.floor(count)
    const hasHalfStar = count % 1 !== 0
    const emptyStars = 5 - Math.ceil(count)
    
    return (
      <Group gap={1}>
        {Array.from({ length: fullStars }, (_, i) => (
          <Text key={`full-${i}`} c="yellow.6" size="md">★</Text>
        ))}
        {hasHalfStar && (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Text c="gray.4" size="md" style={{ margin: 0 }}>★</Text>
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              <Text c="yellow.6" size="md" style={{ margin: 0 }}>★</Text>
            </div>
          </div>
        )}
        {Array.from({ length: emptyStars }, (_, i) => (
          <Text key={`empty-${i}`} c="gray.4" size="md">★</Text>
        ))}
      </Group>
    )
  }

  const certifications = [
    'Software Testing Fundamentals',
    'Python Basics Certificate',
    'SQL Fundamentals Certificate',
    'Python Complete Course (Django)',
    'QA Automation with Java'
  ]

  return (
    <Container size="xl" py="xl" id="about" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={2} size="2.5rem" mb="md">
            About Me
          </Title>
        </div>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="blue" variant="light">
                  <IconBrain size={24} />
                </ThemeIcon>
                <Title order={3}>My Mission</Title>
              </Group>
              <Text size="md" mb="lg">
                As a QA Team Lead at Denshi AD, I lead a team of QA specialists and am responsible for quality assurance 
                processes in the company. I focus on developing team members and implementing best practices.
              </Text>
              <Text size="md">
                My expertise is in creating robust test automation frameworks, using a layered approach 
                with BDD for business-driven testing and Pytest for technical testing, all based on the Page Object Model.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="green" variant="light">
                  <IconTarget size={24} />
                </ThemeIcon>
                <Title order={3}>Specializations</Title>
              </Group>
              <List
                spacing="sm"
                icon={
                  <ThemeIcon color="green" size={16} radius="xl">
                    <IconRobot size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>QA Team Leadership & Mentorship of junior specialists</List.Item>
                <List.Item>Test automation with Playwright and Python (BDD/Pytest)</List.Item>
                <List.Item>API testing with Service Object Model approach</List.Item>
                <List.Item>CI/CD integration with Azure DevOps pipelines</List.Item>
                <List.Item>Manual test case development and UAT coordination</List.Item>
                <List.Item>Database testing, SQL and data migration</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>

        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Group mb="lg">
            <ThemeIcon size="lg" color="violet" variant="light">
              <IconCode size={24} />
            </ThemeIcon>
            <Title order={3}>Technical Skills</Title>
          </Group>
          <Grid>
            {skills.map((skill) => (
              <Grid.Col span={{ base: 12, sm: 6 }} key={skill.name}>
                <Group justify="center" mb="sm" align="center" gap="sm">
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <Text size="sm" fw={500}>{skill.name}</Text>
                  </div>
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    {renderStars(skill.stars)}
                  </div>
                </Group>
              </Grid.Col>
            ))}
          </Grid>
        </Card>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="orange" variant="light">
                  <IconCertificate size={24} />
                </ThemeIcon>
                <Title order={3}>Certifications</Title>
              </Group>
              <Stack gap="sm">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="light" size="md" fullWidth>
                    {cert}
                  </Badge>
                ))}
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="red" variant="light">
                  <IconTrendingUp size={24} />
                </ThemeIcon>
                <Title order={3}>Personal Interests</Title>
              </Group>
              <Text size="md" mb="md">
                Outside of work, I enjoy football, video games, cycling, walking and watching movies. 
                I dedicate time to continuous learning and improving my skills.
              </Text>
              <Group gap="xs" mt="md">
                <Badge variant="outline">Football</Badge>
                <Badge variant="outline">Gaming</Badge>
                <Badge variant="outline">Cycling</Badge>
                <Badge variant="outline">Movies</Badge>
                <Badge variant="outline">Learning</Badge>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  )
}