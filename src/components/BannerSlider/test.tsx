import '../../../.jest/match-media-mock'
import BannerSlider from '.'
import { render, screen } from '@/utils/test-utils'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2NjgxNjMyMjA&ixlib=rb-1.2.1&q=80&w=1080',
    title: 'Nature View 1',
    subtitle:
      '<p>Experience the beauty of <strong>nature</strong> like never before',
    buttonLabel: 'Explore now',
    buttonLink: '/nature/view-1',
    ribbon: 'Top Pick'
  },
  {
    img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIxfHxmb3Jlc3R8ZW58MHx8fHwxNjgxNjMyMjA&ixlib=rb-1.2.1&q=80&w=1080',
    title: 'Nature View 2',
    subtitle:
      '<p>Experience the beauty of <strong>nature</strong> like never before',
    buttonLabel: 'Explore now',
    buttonLink: '/nature/view-2'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /Nature View 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Nature View 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
