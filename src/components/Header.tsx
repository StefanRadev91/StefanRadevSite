import { Group, Button, Container, ActionIcon, useMantineColorScheme, Paper, Stack, rem } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Paper 
      p="lg" 
      style={{ 
        position: 'relative', 
        zIndex: 100, 
        width: '100%',
        backgroundColor: colorScheme === 'dark' ? '#1a1b1e' : '#2c2e33',
        color: 'white'
      }}
    >
      <Container size="xl" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Desktop Layout */}
        <Group 
          justify="space-between" 
          h={60} 
          align="center" 
          visibleFrom="md"
        >
          <div style={{ width: '60px' }}></div>
          
          <Group gap="xl" justify="center" style={{ flex: 1 }}>
            <Button 
              variant="subtle" 
              size="md" 
              radius="md"
              style={{ 
                fontWeight: 500,
                transition: 'all 0.2s ease',
                color: 'white'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }}
            >
              Services
            </Button>
            <Button 
              variant="subtle" 
              size="md" 
              radius="md"
              style={{ 
                fontWeight: 500,
                transition: 'all 0.2s ease',
                color: 'white'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }}
            >
              Blog
            </Button>
            <Button 
              variant="subtle" 
              size="md" 
              radius="md"
              style={{ 
                fontWeight: 500,
                transition: 'all 0.2s ease',
                color: 'white'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }}
            >
              Contacts
            </Button>
          </Group>
          
          <ActionIcon 
            variant="subtle" 
            size="lg" 
            radius="md"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            style={{ 
              transition: 'all 0.2s ease',
              width: '60px',
              color: 'white'
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }
            }}
          >
            {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>
        </Group>

        {/* Mobile Layout */}
        <Stack 
          gap="md" 
          align="center" 
          py="md"
          hiddenFrom="md"
          style={{ position: 'relative' }}
        >
          <ActionIcon 
            variant="subtle" 
            size="lg" 
            radius="md"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            style={{ 
              transition: 'all 0.2s ease',
              color: 'white',
              position: 'absolute',
              top: '0px',
              right: '-16px'
            }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }
            }}
          >
            {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>
          
          <Group gap="lg" justify="center" style={{ marginTop: '20px' }}>
            <Button 
              variant="subtle" 
              size="sm" 
              radius="md"
              style={{ 
                fontWeight: 500,
                transition: 'all 0.2s ease',
                color: 'white'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }}
            >
              Services
            </Button>
            <Button 
              variant="subtle" 
              size="sm" 
              radius="md"
              style={{ 
                fontWeight: 500,
                transition: 'all 0.2s ease',
                color: 'white'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }}
            >
              Blog
            </Button>
            <Button 
              variant="subtle" 
              size="sm" 
              radius="md"
              style={{ 
                fontWeight: 500,
                transition: 'all 0.2s ease',
                color: 'white'
              }}
              styles={{
                root: {
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }
              }}
            >
              Contacts
            </Button>
          </Group>
        </Stack>
      </Container>
    </Paper>
  )
}