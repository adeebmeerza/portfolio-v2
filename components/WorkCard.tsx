"use client";

import { ExternalLink } from "lucide-react";
import { ReactElement, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Stack, Work } from "@/enum";

export interface WorkCardProps {
  title: string;
  description: string;
  stacks: Stack[];
  type?: Work[];
  icon?: ReactElement;
  image?: string;
  link?: string;
  status?: string;
}

const WorkCard = ({
  title,
  description,
  image,
  stacks,
  link,
  icon,
  status,
}: WorkCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className="w-full flex flex-col dark:shadow-gray-800 hover:scale-102 hover:border hover:border-primary hover:shadow-md transition-[scale,box-shadow,background-color]
      duration-[300ms,150ms,500ms] py-4 group"
    >
      <CardHeader>
        <div className="w-fit h-fit rounded-md mb-2">
          {icon && (
            <div className="h-[80px] sm:h-[130px]">
              <span className="group-hover:text-blue-300">{icon}</span>
            </div>
          )}
          {image && (
            <Image
              src={image}
              alt={`${title} icon`}
              width={500}
              height={100}
              className="h-full object-contain rounded-md bottom-0"
            />
          )}
        </div>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-lg font-mono font-bold group-hover:text-blue-300 capitalize">
            {title}
          </CardTitle>
          {link && (
            <Link href={link} target="_blank">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Visit project</span>
              </Button>
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-4 lg:px-6">
        <p
          className={`text-sm text-muted-foreground ${
            expanded ? "text-gray-50" : "line-clamp-5"
          }`}
        >
          {description}
        </p>
        {description.length > 170 && (
          <Button
            variant="link"
            onClick={() => setExpanded(!expanded)}
            className="px-0 h-auto text-xs font-medium mt-1"
          >
            {expanded ? "Show less" : "Read more"}
          </Button>
        )}
        {status && (
          <Badge
            variant="secondary"
            className="mt-4 bg-yellow-500/20 text-yellow-500/70"
          >
            {status}
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start px-4 pt-2 border-t-2">
        <div className="flex flex-wrap gap-2 pt-3">
          {stacks.map((stack) => (
            <Badge
              key={stack}
              variant="secondary"
              className="text-xs bg-primary/20 text-blue-300/80"
            >
              {stack}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
