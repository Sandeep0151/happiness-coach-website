import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Awaken the Purpose Within: Why High Achievers Are Seeking Something More",
    excerpt:
      "Awaken the Purpose Within: Why High Achievers Are Seeking Something More.",
    image: "/placeholder.svg?height=200&width=300",
    date: "June 15, 2025",
    slug: "awaken-the-purpose",
  },
  {
    title: "The Hidden Cost of Success",
    excerpt:
      "The Hidden Cost of Success: What You’re Missing While Winning.",
    image: "/placeholder.svg?height=200&width=300",
    date: "May 10, 2025",
    slug: "the-hidden-cost-of-success",
  },
  {
    title: "The Art of Inner Wealth",
    excerpt: "The Art of Inner Wealth: How Emotional Clarity Leads to Better Leadership.",
    image: "/placeholder.svg?height=200&width=300",
    date: "April 5, 2025",
    slug: "the-art-of-inner-Wealth",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest from Our <span className="text-[#3b5998]">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and strategies for living a happier, more fulfilling life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#191970] hover:text-[#0f0f4d] font-medium transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-[#191970] text-[#191970] hover:bg-[#191970] hover:text-white bg-transparent"
          >
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
