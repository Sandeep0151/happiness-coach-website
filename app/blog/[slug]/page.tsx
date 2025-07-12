import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "5-daily-habits-transform-happiness": {
    title: "5 Daily Habits That Will Transform Your Happiness",
    excerpt:
      "Discover simple yet powerful daily practices that can significantly boost your overall well-being and life satisfaction.",
    content: `
      <p>Happiness isn't just a fleeting emotion—it's a skill that can be developed through consistent daily practices. After working with thousands of clients over the past decade, I've identified five key habits that consistently lead to lasting happiness and fulfillment.</p>

      <h2>1. Morning Gratitude Practice</h2>
      <p>Starting your day with gratitude sets a positive tone that ripples through everything you do. Research shows that people who practice gratitude regularly experience:</p>
      <ul>
        <li>25% increase in happiness levels</li>
        <li>Better sleep quality</li>
        <li>Stronger relationships</li>
        <li>Improved physical health</li>
      </ul>
      <p><strong>How to implement:</strong> Each morning, write down three things you're grateful for. Be specific and focus on why you're grateful for each item.</p>

      <h2>2. Mindful Movement</h2>
      <p>Physical activity isn't just good for your body—it's essential for mental well-being. You don't need to run marathons; even 10 minutes of mindful movement can make a significant difference.</p>
      <p>Whether it's yoga, walking, dancing, or stretching, the key is to be present and aware of your body's movements and sensations.</p>

      <h2>3. Connection Before Consumption</h2>
      <p>Before reaching for your phone or diving into work, take a moment to connect with yourself or others. This could be:</p>
      <ul>
        <li>A brief meditation or breathing exercise</li>
        <li>A meaningful conversation with a loved one</li>
        <li>Journaling about your intentions for the day</li>
        <li>Simply sitting in silence for a few minutes</li>
      </ul>

      <h2>4. Acts of Kindness</h2>
      <p>Research consistently shows that helping others boosts our own happiness levels. The "helper's high" is a real phenomenon that releases endorphins and creates a sense of purpose.</p>
      <p>Small acts count: holding a door, sending an encouraging text, or simply listening to someone who needs to be heard.</p>

      <h2>5. Evening Reflection</h2>
      <p>End your day by reflecting on what went well. This practice helps rewire your brain to notice positive experiences and builds resilience for challenges.</p>
      <p>Ask yourself: What am I proud of today? What did I learn? How did I grow?</p>

      <h2>Making It Stick</h2>
      <p>The key to building these habits is to start small and be consistent. Choose one habit to focus on for the first week, then gradually add others. Remember, progress over perfection is the goal.</p>

      <p>If you're ready to dive deeper into transforming your happiness, I invite you to join one of our upcoming webinars where we'll explore these concepts in greater detail and provide you with personalized strategies for implementation.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Happy+Morning+Routine",
    author: "Dr. Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    tags: ["Happiness", "Daily Habits", "Mindfulness", "Well-being"],
    likes: 127,
    comments: 23,
  },
  "science-behind-positive-thinking": {
    title: "The Science Behind Positive Thinking",
    excerpt:
      "Explore the research-backed benefits of positive thinking and learn how to rewire your brain for optimism.",
    content: `
      <p>For decades, positive thinking was dismissed as mere wishful thinking. Today, neuroscience and psychology research reveal that optimism isn't just feel-good fluff—it's a powerful tool that literally rewires your brain for better outcomes.</p>

      <h2>The Neuroscience of Optimism</h2>
      <p>When we engage in positive thinking, several remarkable changes occur in our brains:</p>
      <ul>
        <li><strong>Neuroplasticity activation:</strong> Positive thoughts create new neural pathways</li>
        <li><strong>Prefrontal cortex strengthening:</strong> Better decision-making and emotional regulation</li>
        <li><strong>Stress hormone reduction:</strong> Lower cortisol levels lead to better health</li>
        <li><strong>Dopamine release:</strong> Natural motivation and reward system activation</li>
      </ul>

      <h2>Research Findings</h2>
      <p>Dr. Martin Seligman's groundbreaking research at the University of Pennsylvania found that optimists:</p>
      <ul>
        <li>Live 7-10 years longer than pessimists</li>
        <li>Have 50% lower risk of heart disease</li>
        <li>Experience better immune function</li>
        <li>Achieve higher levels of success in career and relationships</li>
      </ul>

      <h2>The Broaden-and-Build Theory</h2>
      <p>Psychologist Barbara Fredrickson's research shows that positive emotions don't just feel good—they broaden our awareness and build our psychological resources:</p>
      <ul>
        <li><strong>Broaden:</strong> Positive emotions expand our perception and open us to new possibilities</li>
        <li><strong>Build:</strong> They help us develop lasting personal resources like resilience, creativity, and social connections</li>
      </ul>

      <h2>Practical Applications</h2>
      <p>Understanding the science is just the beginning. Here's how to apply these findings:</p>

      <h3>1. Cognitive Reframing</h3>
      <p>Challenge negative thoughts by asking: "Is this thought helpful? What evidence supports or contradicts it? How would I advise a friend in this situation?"</p>

      <h3>2. Visualization Techniques</h3>
      <p>Spend 5-10 minutes daily visualizing positive outcomes. Your brain can't distinguish between vividly imagined experiences and real ones.</p>

      <h3>3. Positive Affirmations</h3>
      <p>Use evidence-based affirmations that feel authentic to you. Instead of "I am perfect," try "I am learning and growing every day."</p>

      <h2>The Balance Factor</h2>
      <p>It's important to note that healthy optimism isn't about ignoring reality or suppressing negative emotions. It's about:</p>
      <ul>
        <li>Acknowledging challenges while focusing on solutions</li>
        <li>Learning from setbacks without dwelling on them</li>
        <li>Maintaining hope while taking practical action</li>
      </ul>

      <p>Ready to harness the power of positive thinking in your own life? Join our next webinar where we'll dive deeper into practical techniques for rewiring your brain for optimism and success.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Brain+Positive+Thinking",
    author: "Dr. Sarah Johnson",
    date: "December 10, 2024",
    readTime: "10 min read",
    tags: ["Psychology", "Neuroscience", "Positive Thinking", "Research"],
    likes: 89,
    comments: 15,
  },
  "overcoming-challenges-resilience": {
    title: "Overcoming Life's Challenges with Resilience",
    excerpt: "Learn practical strategies to build resilience and turn life's obstacles into opportunities for growth.",
    content: `
      <p>Life inevitably presents us with challenges, setbacks, and unexpected turns. The difference between those who thrive and those who merely survive lies in one crucial quality: resilience. This isn't just about bouncing back—it's about bouncing forward, stronger and wiser than before.</p>

      <h2>Understanding Resilience</h2>
      <p>Resilience isn't a trait you're born with or without. It's a skill that can be developed through practice and intentional effort. Research shows that resilient people share certain characteristics:</p>
      <ul>
        <li>They view challenges as opportunities for growth</li>
        <li>They maintain perspective during difficult times</li>
        <li>They have strong support networks</li>
        <li>They practice self-compassion</li>
        <li>They focus on what they can control</li>
      </ul>

      <h2>The Resilience Toolkit</h2>
      <p>Here are evidence-based strategies to build your resilience muscle:</p>

      <h3>1. Develop a Growth Mindset</h3>
      <p>Carol Dweck's research shows that people with a growth mindset—those who believe abilities can be developed—are more resilient in the face of challenges.</p>
      <p><strong>Practice:</strong> When facing a setback, ask "What can I learn from this?" instead of "Why me?"</p>

      <h3>2. Build Your Support Network</h3>
      <p>Strong relationships are the foundation of resilience. Having people who believe in you and support you makes all the difference.</p>
      <p><strong>Action steps:</strong></p>
      <ul>
        <li>Reach out to one person each week</li>
        <li>Join communities aligned with your interests</li>
        <li>Be the support you wish to receive</li>
      </ul>

      <h3>3. Practice Emotional Regulation</h3>
      <p>Resilient people don't avoid difficult emotions—they learn to navigate them skillfully.</p>
      <p><strong>Techniques:</strong></p>
      <ul>
        <li>Deep breathing exercises</li>
        <li>Mindfulness meditation</li>
        <li>Journaling about your feelings</li>
        <li>Physical exercise to process emotions</li>
      </ul>

      <h3>4. Focus on Your Circle of Control</h3>
      <p>Stephen Covey's concept of the Circle of Control reminds us to focus our energy on what we can influence rather than what we cannot.</p>

      <h2>The Post-Traumatic Growth Model</h2>
      <p>Psychologists Richard Tedeschi and Lawrence Calhoun discovered that many people don't just recover from trauma—they experience post-traumatic growth in five key areas:</p>
      <ul>
        <li>Appreciation of life</li>
        <li>Relating to others</li>
        <li>Personal strength awareness</li>
        <li>New possibilities</li>
        <li>Spiritual development</li>
      </ul>

      <h2>Building Daily Resilience</h2>
      <p>Resilience isn't just for major crises—it's built through daily practices:</p>
      <ul>
        <li><strong>Morning intention setting:</strong> Start each day with purpose</li>
        <li><strong>Stress inoculation:</strong> Gradually expose yourself to manageable challenges</li>
        <li><strong>Reflection practice:</strong> End each day by noting what you handled well</li>
        <li><strong>Self-care rituals:</strong> Maintain your physical and emotional well-being</li>
      </ul>

      <h2>When to Seek Support</h2>
      <p>Building resilience doesn't mean going it alone. Sometimes the most resilient thing you can do is ask for help. Consider professional support when:</p>
      <ul>
        <li>Challenges feel overwhelming for extended periods</li>
        <li>You're using unhealthy coping mechanisms</li>
        <li>Relationships are suffering significantly</li>
        <li>You're experiencing symptoms of depression or anxiety</li>
      </ul>

      <p>Remember, seeking help is a sign of strength, not weakness. It's an investment in your future resilience and well-being.</p>

      <p>If you're ready to build your resilience toolkit with personalized strategies and community support, I invite you to join our upcoming resilience workshop. Together, we'll transform your relationship with challenges and unlock your potential for growth.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Mountain+Climbing+Resilience",
    author: "Dr. Sarah Johnson",
    date: "December 5, 2024",
    readTime: "12 min read",
    tags: ["Resilience", "Personal Growth", "Mental Health", "Coping Strategies"],
    likes: 156,
    comments: 31,
  },
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#191970] to-[#2a2a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-200">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {post.date}
            </div>
            <div>{post.readTime}</div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative">
        <div className="relative h-96 w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-[#191970] hover:prose-a:text-[#0f0f4d]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Engagement Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#191970] transition-colors">
                      <Heart size={20} />
                      <span>{post.likes} likes</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-[#191970] transition-colors">
                      <MessageCircle size={20} />
                      <span>{post.comments} comments</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-[#191970] transition-colors">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt={post.author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Dr. Sarah Johnson is a certified happiness coach with over 10 years of experience helping
                      individuals discover their path to lasting joy and fulfillment. She holds a Ph.D. in Positive
                      Psychology and has worked with thousands of clients worldwide.
                    </p>
                    <Button className="bg-[#191970] hover:bg-[#0f0f4d] text-white">View All Posts</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <div className="bg-[#191970] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Ready to Transform Your Life?</h3>
                  <p className="mb-4 text-blue-100">
                    Join our next webinar and discover personalized strategies for lasting happiness.
                  </p>
                  <Button className="w-full bg-white text-[#191970] hover:bg-gray-100">Book Your Seat</Button>
                </div>

                {/* Related Posts */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {Object.entries(blogPosts)
                      .filter(([key]) => key !== slug)
                      .slice(0, 3)
                      .map(([key, relatedPost]) => (
                        <Link
                          key={key}
                          href={`/blog/${key}`}
                          className="block p-4 border border-gray-200 rounded-lg hover:border-[#191970] transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
                          <p className="text-sm text-gray-600">{relatedPost.readTime}</p>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                  <p className="text-gray-600 mb-4">
                    Get the latest insights on happiness and personal growth delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#191970]"
                    />
                    <Button className="w-full bg-[#191970] hover:bg-[#0f0f4d] text-white">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-[#191970] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't just read about transformation—experience it. Join our community of growth-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#191970] hover:bg-gray-100 text-lg px-8 py-3">
              Book a Coaching Session
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#191970] text-lg px-8 py-3 bg-transparent"
            >
              Join Next Webinar
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
