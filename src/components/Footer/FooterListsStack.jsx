import { Button, List, ListItem } from "@chakra-ui/react"
import { linkPages } from "../../config/linkPages"
import Link from "next/link"

export default function FooterListsStack() {
   return (
      <>
         <List spacing={2} mb="1.5rem">
            <ListItem letterSpacing="1px" fontWeight="bold" fontSize="15px">
               Explore
            </ListItem>
            {linkPages.map((link) => (
               <ListItem key={link.name}>
                  <Link href={link.href}>
                     <a>
                        <Button
                           color="grey"
                           _hover={{ color: "white", textDecoration: "underline" }}
                           textTransform="capitalize"
                           colorScheme="gray"
                           variant="link"
                           fontSize="14px"
                        >
                           {link.name}
                        </Button>
                     </a>
                  </Link>
               </ListItem>
            ))}
         </List>

         <List spacing={2} mb="1.5rem">
            <ListItem letterSpacing="1px" fontWeight="bold" fontSize="15px">
               Follow
            </ListItem>

            <ListItem>
               <a href="#">
                  <Button
                     color="grey"
                     _hover={{ color: "white", textDecoration: "underline" }}
                     textTransform="capitalize"
                     colorScheme="gray"
                     variant="link"
                     fontSize="14px"
                  >
                     Facebook
                  </Button>
               </a>
            </ListItem>

            <ListItem>
               <a href="#">
                  <Button
                     color="grey"
                     _hover={{ color: "white", textDecoration: "underline" }}
                     textTransform="capitalize"
                     colorScheme="gray"
                     variant="link"
                     fontSize="14px"
                  >
                     Instagram
                  </Button>
               </a>
            </ListItem>

            <ListItem>
               <a href="#">
                  <Button
                     color="grey"
                     _hover={{ color: "white", textDecoration: "underline" }}
                     textTransform="capitalize"
                     colorScheme="gray"
                     variant="link"
                     fontSize="14px"
                  >
                     Twitter
                  </Button>
               </a>
            </ListItem>
         </List>

         <List spacing={2}>
            <ListItem letterSpacing="1px" fontWeight="bold" fontSize="15px">
               Legal
            </ListItem>
            <ListItem>
               <a href="#">
                  <Button
                     color="grey"
                     _hover={{ color: "white", textDecoration: "underline" }}
                     textTransform="capitalize"
                     colorScheme="gray"
                     variant="link"
                     fontSize="14px"
                  >
                     Terms
                  </Button>
               </a>
            </ListItem>
            <ListItem>
               <a href="#">
                  <Button
                     color="grey"
                     _hover={{ color: "white", textDecoration: "underline" }}
                     textTransform="capitalize"
                     colorScheme="gray"
                     variant="link"
                     fontSize="14px"
                  >
                     Privacy
                  </Button>
               </a>
            </ListItem>
         </List>
      </>
   )
}
