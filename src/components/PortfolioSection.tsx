import { 
  Container, 
  Title, 
  Text, 
  Card, 
  Grid, 
  Badge, 
  Group, 
  Button, 
  Stack,
  Image,
  ThemeIcon,
  List
} from '@mantine/core'
import { 
  IconExternalLink, 
  IconBrandGithub, 
  IconCalendar, 
  IconUsers, 
  IconTestPipe,
  IconBrandAzure,
  IconCheck
} from '@tabler/icons-react'
import dacaImage from '../assets/DACA.png'
import armeecImage from '../assets/logos_EN_Armeec .png'
import bulgariaAirImage from '../assets/Bulgaria_Air_logo.png'
import azureDevOpsImage from '../assets/Azure-DevOps-Logo.png'

export function PortfolioSection() {
  const projects = [
    {
      title: 'Layered Test Automation Framework with Playwright',
      description: 'Comprehensive testing solution at Denshi AD with BDD and technical testing layers',
      image: armeecImage,
      technologies: ['Playwright', 'Python', 'BEHAVE', 'Pytest', 'Page Object Model', 'Azure DevOps'],
      features: [
        'BEHAVE for user scenarios and acceptance criteria',
        'Pytest for edge cases and complex system validation',
        'Unified Page Object Model for code consistency',
        'Cross-browser testing support',
        'CI/CD integration with Azure DevOps'
      ],
      results: {
        coverage: '90%',
        timeReduction: '75%',
        bugDetection: 'Early bug detection'
      },
      liveUrl: '#',
      githubUrl: 'https://github.com/StefanRadev91/'
    },
    {
      title: 'API Testing with Service Object Model',
      description: 'Robust API testing framework with dedicated service classes for each endpoint',
      image: bulgariaAirImage,
      technologies: ['Python', 'Pytest', 'Requests', 'Service Object Model', 'JSON Schema'],
      features: [
        'Service Object Model implementation',
        'API endpoint dedicated classes',
        'Separation of operations and verification logic',
        'Reusable and maintainable test structure',
        'Environment-specific configurations'
      ],
      results: {
        coverage: '95%',
        timeReduction: '80%',
        apiEndpoints: '100+ endpoints covered'
      },
      liveUrl: '#',
      githubUrl: 'https://github.com/StefanRadev91/'
    },
    {
      title: 'Database Testing & Migration Framework',
      description: 'Comprehensive database testing solution from experience at Debt Collection Agency',
      image: dacaImage,
      technologies: ['SQL', 'Python', 'Database Migration', 'Data Mapping', 'ETL Testing'],
      features: [
        'Database table and column management',
        'Data migration validation',
        'Business report extraction',
        'Data mapping verification',
        'SQL query optimization testing'
      ],
      results: {
        coverage: '100%',
        timeReduction: '70%',
        dataMigration: 'Successful migration'
      },
      liveUrl: '#',
      githubUrl: 'https://github.com/StefanRadev91/'
    },
    {
      title: 'CI/CD Pipeline Testing Integration',
      description: 'Azure DevOps pipeline integration for automated testing in development lifecycle',
      image: azureDevOpsImage,
      technologies: ['Azure DevOps', 'CI/CD', 'Pipeline Integration', 'Automated Testing', 'Build Validation'],
      features: [
        'Automated test execution in pipelines',
        'Build validation and quality gates',
        'Test result reporting integration',
        'Environment-specific deployments',
        'Continuous feedback loops'
      ],
      results: {
        coverage: '85%',
        timeReduction: '90%',
        executionSpeed: 'Real-time feedback'
      },
      liveUrl: '#',
      githubUrl: 'https://github.com/StefanRadev91/'
    }
  ]

  return (
    <Container size="xl" py="xl" id="portfolio" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={2} size="2.5rem" mb="md">
            Portfolio
          </Title>
          <Text size="lg" c="dimmed" maw={800} mx="auto">
            Showcase of automation projects and case studies with measurable results
          </Text>
        </div>

        <Grid gutter="xl">
          {projects.map((project, index) => (
            <Grid.Col span={{ base: 12, md: 6 }} key={index}>
              <Card shadow="md" padding="xl" radius="md" withBorder h="100%">
                <Card.Section>
                  <Image
                    src={project.image}
                    height={200}
                    alt={project.title}
                    fallbackSrc="https://via.placeholder.com/400x200?text=Project+Image"
                    fit="contain"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f8f9fa'
                    }}
                  />
                </Card.Section>

                <Stack gap="md" mt="md">
                  <div>
                    <Title order={3} size="1.3rem" mb="xs">
                      {project.title}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {project.description}
                    </Text>
                  </div>

                  <Group gap="xs">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="light" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </Group>

                  <div>
                    <Text size="sm" fw={500} mb="xs">Key Features:</Text>
                    <List
                      spacing="xs"
                      size="xs"
                      icon={
                        <ThemeIcon color="green" size={14} radius="xl">
                          <IconCheck size={10} />
                        </ThemeIcon>
                      }
                    >
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <List.Item key={featureIndex}>{feature}</List.Item>
                      ))}
                    </List>
                  </div>

                  <Card p="md" radius="md" bg="blue.0" style={{ border: '1px solid var(--mantine-color-blue-2)' }}>
                    <Text size="sm" fw={500} mb="xs" c="blue">Results:</Text>
                    <Group gap="lg">
                      <div>
                        <Text size="lg" fw={700} c="blue">
                          {project.results.coverage}
                        </Text>
                        <Text size="xs" c="dimmed">Coverage</Text>
                      </div>
                      <div>
                        <Text size="lg" fw={700} c="green">
                          {project.results.timeReduction}
                        </Text>
                        <Text size="xs" c="dimmed">Time saved</Text>
                      </div>
                    </Group>
                  </Card>

                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

      </Stack>
    </Container>
  )
}