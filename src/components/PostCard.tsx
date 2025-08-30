import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/data/posts';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  return (
    <Card className={`group overflow-hidden bg-card border-border/50 hover:border-primary/20 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge 
          variant="secondary" 
          className="absolute top-4 left-4 bg-background/90 text-foreground border-border/50"
        >
          {post.category}
        </Badge>
        {post.featured && (
          <Badge 
            variant="default" 
            className="absolute top-4 right-4 bg-accent text-accent-foreground"
          >
            Featured
          </Badge>
        )}
      </div>

      <CardHeader className="space-y-3">
        <div className="flex items-center text-xs text-muted-foreground space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link 
          to={`/post/${post.id}`}
          className="group/title"
        >
          <h3 className={`font-bold text-foreground group-hover/title:text-primary transition-colors leading-tight ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {post.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className={`text-muted-foreground leading-relaxed ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs bg-muted/50 text-muted-foreground border-border/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors cursor-pointer"
            >
              <Tag className="h-2.5 w-2.5 mr-1" />
              {tag}
            </Badge>
          ))}
          {post.tags.length > (featured ? 5 : 3) && (
            <Badge variant="outline" className="text-xs bg-muted/50 text-muted-foreground border-border/50">
              +{post.tags.length - (featured ? 5 : 3)} more
            </Badge>
          )}
        </div>

        <Link 
          to={`/post/${post.id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-glow transition-colors"
        >
          Read more →
        </Link>
      </CardContent>
    </Card>
  );
};

export default PostCard;